import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import golderCard from "../../../public/icons/golderCard.png";
import silverCard from "../../../public/icons/silverCard.png";
import styles from "./ResponsiveGrid.module.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./TicketInfo.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import PhoneInput from "react-phone-input-2";
import { title } from "process";
import { log } from "console";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { notifications } from "@mantine/notifications";

interface CardData {
  id: number;
  title: string;
  price: number;
  discountedPrice?: string; // Optional, for cases with no discount
  description: string;
  image: StaticImageData; // Update to match your data
  isSoldOut: boolean;
  discount: boolean;
  count: number;
  corporate?: boolean;
  totalPrice: number;
}

const ResponsiveGrid = ({ ticketsData }: { ticketsData: any }) => {
  const [isLoading, setIsLoading] = useState(false);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTicket, setSelectedTicket] = useState<any>();
  function formatPrice(price?: number): string {
    if (price === undefined) {
      return "N/A";
    }

    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
      price
    );
  }
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length > 0 ? null : "Name is required"),
      phone: (value) => (value.length > 0 ? null : "Phone number is required"),
    },
  });

  const handleTicketSelect = (data: CardData) => {
    setSelectedTicket({
      ...data,
      totalPrice: data.count * data.price,
    });
    open();
  };

  const handleCounter = (type: string) => {
    if (!selectedTicket || selectedTicket.id === undefined) return;

    const basePrice = selectedTicket.price;

    if (type === "add") {
      setSelectedTicket({
        ...selectedTicket,
        count: (selectedTicket.count || 0) + 1,
        totalPrice: basePrice * ((selectedTicket.count || 0) + 1),
      });
    } else {
      if (selectedTicket.count && selectedTicket.count > 1) {
        setSelectedTicket({
          ...selectedTicket,
          count: selectedTicket.count - 1,
          totalPrice: basePrice * (selectedTicket.count - 1),
        });
      } else if (selectedTicket.count === 1) {
        setSelectedTicket({
          ...selectedTicket,
          count: 1,
          totalPrice: basePrice,
        });
      }
    }
  };

  const redirectFunction=async (response:any)=>{
    const stripe = await stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.session_id,
      })
    }
  }

  const handleSubmit = async (formvalue: any) => {
    const Rq = {
      ticket_id: selectedTicket?.id,
      quantity: selectedTicket?.count,
      user_email: formvalue.email.toLowerCase(),
      mobile_number:formvalue.phone,
      user_name:formvalue.name
    }; 

    try {
      setIsLoading(true);
      const response = await axios(
        `${process.env.NEXT_PUBLIC_BASE_URL}/events/create-checkout-session/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: Rq,
        }
      );
    
      redirectFunction(response)
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.log("api error", error);
      notifications.show({
        title: 'Something went wrong',
        color: "red",
        message: 'Please try again after some times.',
      });
    }
  };

  return (
    <div className={styles.gridContainer}>
      <>
        {ticketsData.map((card: any, i: number) => (
          <div
            onClick={() => i !== 2 && handleTicketSelect(card)}
            className={styles.card}
            key={card.id}
          >
            <Grid w="100%" p={0} pb={4.5}>
              <Grid.Col span={4.5} p={0} pl={7} pt={4} pos="relative">
                <Flex
                  align="center"
                  w="100%"
                  direction="column"
                  justify="center"
                  gap={0}
                  pos="absolute"
                  style={{ top: "52%", transform: "translateY(-50%)" }}
                >
                  <Text
                    lh={{ md: "14px", base: "18px" }}
                    tt="uppercase"
                    ta="center"
                    className={styles.responsiveText}
                    fz={{ lg: "12px", md: "10px", sm: "12px", xs: "10px" }}
                    fw={600}
                    c="#000000"
                    w={"60%"}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {card.name}
                  </Text>
                  <Text
                    mt={-4}
                    tt="uppercase"
                    ta="center"
                    fz={{ lg: "22px", md: "16px", sm: "25px", xs: "20px" }}
                    fw={700}
                    c="#000000"
                  >
                    ₹{formatPrice(card.price)}
                    {/* {card.price} */}
                  </Text>
                  {card.discountedPrice && (
                    <Text
                      mt={-4}
                      tt="uppercase"
                      ta="center"
                      fz={{ lg: "12px", md: "10px", sm: "10px", xs: "10px" }}
                      fw={700}
                      className={styles.responsivesmallText}
                      td="line-through"
                      c="#000000"
                    >
                      {card.discountedPrice}
                    </Text>
                  )}
                </Flex>
                <Image
                  src={i === 1 ? golderCard : silverCard}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  alt={`${card.title} image`}
                />
              </Grid.Col>
              <Grid.Col span={7.5}>
                <Flex h="100%" align="center">
                  <Text
                    tt="uppercase"
                    ta="start"
                    fz={{ md: "12px", base: "14px" }}
                    fw={600}
                    w="95%"
                    c="#000000"
                    ml={{ md: 0, base: 2 }}
                  >
                    {card.description}
                  </Text>
                </Flex>
              </Grid.Col>
            </Grid>
          </div>
        ))}
      </>

      <Modal
        classNames={{
          content: classes.modalContent,
          root: classes.modalRoot,
          body: classes.modalBody,
        }}
        size={"lg"}
        withCloseButton={false}
        opened={opened}
        onClose={close}
        centered
        closeOnClickOutside={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
      >
        <Flex justify={"end"} className={classes.modalPositionBefore}>
          <Card
            className="pointer"
            onClick={close}
            radius={0}
            py={4}
            bg={"#1BA0D9"}
          >
            <Text c={"brand.0"}>Close</Text>
          </Card>
        </Flex>
        <Stack mt={20} w={"100%"} p={20}>
          <Flex wrap={"wrap"} mb={0} align={"center"} justify={"space-between"}>
            <Stack gap={2}>
              <Text fw={600} fz="18px">
                {selectedTicket?.title}
              </Text>
              <Text fw={400} fz="14px">
                {selectedTicket?.description}
              </Text>
            </Stack>
            <Stack gap={0} className={classes.ticketPrice}>
              <Text fw={700} fz="25px" c={"#1BA0D9"}>
                ₹{formatPrice(selectedTicket?.totalPrice)}
              </Text>
              {selectedTicket?.discountedPrice && (
                <Text fw={400} fz="12px" td={"line-through"}>
                  {selectedTicket?.discountedPrice}
                </Text>
              )}
            </Stack>
          </Flex>
          <Stack gap={8} mb={3} align={"start"}>
            <Text>Ticket count</Text>
            <Flex gap={10}>
              <Card
                opacity={
                  selectedTicket?.name === "COPORATE TICKET" &&
                  selectedTicket.count &&
                  selectedTicket.count <= 5
                    ? 0.4
                    : 1
                }
                onClick={() => {
                  if (selectedTicket?.name !== "COPORATE TICKET") {
                    handleCounter("minus");
                  } else {
                    if (selectedTicket.count >= 6) {
                      handleCounter("minus");
                    }
                  }
                }}
                className="pointer"
                shadow="lg"
                p={6}
                radius={"50%"}
                bd={"1px solid #1BA0D9"}
              >
                <IconMinus size={12} color={"#1BA0D9"} />
              </Card>
              <Card
                className="pointer"
                shadow="md"
                p={0}
                px={8}
                radius={"50%"}
                bd={"1px solid #1BA0D9"}
              >
                <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
                  <Text mt={-1} fz={12}>
                    {selectedTicket?.count || 1}
                  </Text>
                </Flex>
              </Card>
              <Card
                onClick={() => handleCounter("add")}
                className="pointer"
                shadow="md"
                p={6}
                radius={"50%"}
                bd={"1px solid #1BA0D9"}
              >
                <IconPlus size={12} color="#1BA0D9" />
              </Card>
            </Flex>
          </Stack>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Stack gap={10}>
              <TextInput
                withAsterisk
                label="Name"
                placeholder="Enter your Name"
                classNames={{
                  input: classes.inputClass,
                }}
                key={form.key("name")}
                {...form.getInputProps("name")}
              />

              <TextInput
                withAsterisk
                label="Email"
                classNames={{
                  input: classes.inputClass,
                }}
                placeholder="Enter your Email"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />

              <Stack gap={2}>
                <Text fz={"14px"} fw={500}>
                  Phone
                </Text>
                <PhoneInput
                  enableSearch
                  inputClass={classes.phoneInputClass}
                  country="in"
                  inputStyle={{
                    color: "black", // Ensure this is applied
                  }}
                  inputProps={{
                    styles:{
                      input: {
                        color: "black", // Ensure this is applied
                      }
                    }
                  }}
                  containerClass={classes.phoneContainerClass}
                  {...form.getInputProps("phone")}
                  dropdownClass={classes.dropdownClass}
                  buttonClass={classes.countryBtnClass}
                />

                {form.errors.phone && (
                  <Text fz={12} c="red">
                    {form.errors.phone}
                  </Text>
                )}
              </Stack>
            </Stack>

            <Group justify="center" mt="md">
              <Button
                loading={isLoading}
                bg={"#1BA0D9"}
                w={"8rem"}
                type="submit"
              >
                Book now
              </Button>
            </Group>
          </form>
        </Stack>
      </Modal>
    </div>
  );
};

export default ResponsiveGrid;
