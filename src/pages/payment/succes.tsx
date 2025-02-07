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
import { RingLoader } from './RingLoader';
import { useRouter } from "next/router";

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
