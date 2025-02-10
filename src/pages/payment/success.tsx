// pages/success.js
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  Center,
  CheckIcon,
  Button,
  MantineThemeProvider,
  Loader,
  createTheme,
} from "@mantine/core";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import RingLoader from './RingLoader';
import { useRouter } from "next/router";
import axios from "axios";

const theme = createTheme({
    components: {
      Loader: Loader.extend({
        defaultProps: {
          loaders: { ...Loader.defaultLoaders, ring: RingLoader },
          type: 'ring',
        },
      }),
    },
  });
  

export default function Success() {
  const [isSucces, setisSucces] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [ticketId, setTicketId] = useState(null);

  const { session_id } = router.query;

  const callWebhookApi = async () => {
    try{
      if(session_id){
        setIsLoading(true);
        const response = await axios( 
          `${process.env.NEXT_PUBLIC_BASE_URL}/events/get/ticket-details/?session_id=${session_id}`,
          {
            method: "GET", 
          }
        );
        setTicketId(response.data.ticket_id)
        setIsLoading(false);
      }
    } catch(error){
      setIsLoading(false); 
      router.push("/payment/fail") 
      console.log("error",error)
    } 
  };

  useEffect(() => {
    callWebhookApi();
  }, [session_id])
  

  return (
    <Container>
      <Center style={{ height: "100vh", flexDirection: "column" }}>
        {isLoading ? (
          <MantineThemeProvider theme={theme}>
            <Loader />
            <Text>Please wait...</Text>
          </MantineThemeProvider>
        ) : (
          <>
            <IconCircleCheckFilled size={80} color="#5cb85c" />
            <Title ta={"center"} order={1} mt="md">
            Payment successful! Thank you for your booking.
            </Title>
            <Text mt="sm"  >
              Ticket Id : <strong>{ticketId}</strong>
            </Text>
            <Text mt="sm" c="dimmed">
              You will receive a confirmation email shortly.
            </Text>
            <Button variant="outline" onClick={()=>router.push("/")} radius={"50px"} color={"blue"} mt="md">
              <Text mt={-4} fw={600}>
                Back to Home
              </Text>
            </Button>
          </>
        )}

        {/* <CheckIcon size={64} color="teal" /> */}
      </Center>
    </Container>
  );
}
