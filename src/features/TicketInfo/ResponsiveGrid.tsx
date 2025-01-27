import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import golderCard from "../../../public/icons/golderCard.png";
import silverCard from "../../../public/icons/silverCard.png";
import styles from "./ResponsiveGrid.module.css";
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

const ResponsiveGrid = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Early Bird \n Offer",
      price: 6000,
      discountedPrice: "₹7,000",
      description: "General admission to all sessions and networking.",
      image: golderCard, // Replace with the actual path
      isSoldOut: false,
      discount: true,
      count: 1,
      totalPrice: 6000,
    },
    {
      id: 2,
      title: "Corporate \n Ticket",
      price: 5000,
      discountedPrice: undefined,
      description:
        "Available until 31st March 2025. Don’t miss the chance to save!",
      image: silverCard, // Replace with the actual path
      isSoldOut: false,
      corporate: true,
      discount: false,
      count: 5,
      totalPrice: 5000,
    },
    {
      id: 3,
      title: "VIP",
      price: 15000,
      discountedPrice: undefined,
      description: "(Sold Out)",
      image: silverCard, // Replace with the actual path
      isSoldOut: true,
      discount: false,
      count: 0,
      totalPrice: 15000,
    },
  ];

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedTicket, setSelectedTicket] = useState<CardData>();
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
    console.log(data, "datadata");
    setSelectedTicket({
      ...data,
      totalPrice: data.count * data.price,
    });
    open();
  };

  console.log(selectedTicket?.count, "selectedTicketcc");
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

  return (
    <div className={styles.gridContainer}>
      <>
        {cardData.map((card, i) => (
          <div
            onClick={() => i !== 2 && handleTicketSelect(card)}
            className={styles.card}
            key={card.id}
          >
            <Grid w="100%" p={0} pb={4.5}>
              <Grid.Col span={4} p={0} pl={7} pt={4} pos="relative">
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
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {card.title}
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
                  src={card.image}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%"
                  }}
                  alt={`${card.title} image`}
                />
              </Grid.Col>
              <Grid.Col  span={8}>
                <Flex h="100%" align="center">
                  <Text
                    tt="uppercase"
                    ta="start"
                    fz={{ md: "12px", base: "14px" }}
                    fw={600}
                    w="95%"
                    c="#000000"
                    ml={{ md: 2, base: 2 }} 
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
                  selectedTicket?.corporate &&
                  selectedTicket.count &&
                  selectedTicket.count <= 5
                    ? 0.4
                    : 1
                }
                onClick={() => {
                  if (!selectedTicket?.corporate) {
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
                  <Text mt={-1} fz={12}>{selectedTicket?.count || 1}</Text>
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
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                  containerClass={classes.phoneContainerClass}
                  containerStyle={
                    form.errors.phone
                      ? {
                          border: "1px solid red",
                          overflow: "hidden",
                        }
                      : {}
                  }
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
              <Button bg={"#1BA0D9"} w={"8rem"} type="submit">
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
