import {
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Group,
  List,
  Modal,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./TicketInfo.module.css";
import paymentCard from "../../../public/Images/paymentCard.png";
import Image from "next/image";
import orangeCard from "../../../public/icons/orangeCard.png";
import greenCard from "../../../public/Images/greenCard.png";
import yellowCard from "../../../public/Images/yellowCard.png";
import blueCard from "../../../public/Images/blueCard.png";
import golderCard from "../../../public/icons/golderCard.png";
import silverCard from "../../../public/icons/silverCard.png";

import { IconCheck } from "@tabler/icons-react";
import ResponsiveGrid from "./ResponsiveGrid";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import PhoneInput from "react-phone-input-2";

const sponsorships = [
  {
    title: "Title Sponsor",
    price: "₹3,50,000",
    gst: "+ 18% GST",
    points: [
      "Prominent logo",
      "Stage backdrop",
      "Dedicated speaking",
      "Presentation slot",
      "Complimentary stall space.",
    ],
    color: "rgba(255, 90, 14, 1)",
    cardImage: orangeCard,
  },
  {
    title: "Powered By Sponsor",
    price: "₹2,50,000",
    gst: "+ 18% GST",
    points: [
      "Logo visibility",
      "Mention in event promotions",
      "Complimentary stall space",
    ],
    color: "rgba(0, 141, 64, 1)",
    cardImage: greenCard,
  },
  {
    title: "Gifts and Goodies Sponsor",
    price: "₹1,50,000",
    gst: "+ 18% GST",
    points: [
      "Logo printed on all distributed gift items",
      "Acknowledgment during the event.",
    ],
    color: "rgba(228, 149, 2, 1)",
    cardImage: yellowCard,
  },
  {
    title: "Stalls",
    price: "₹25,000",
    gst: "+ 18% GST",
    points: [
      "Showcase your brand",
      "Showcase your products",
      "Services to an engaged audience.",
    ],
    color: "rgba(48, 140, 215, 1)",
    cardImage: blueCard,
  },
];

const Points = ({ points }: { points: string[] }) => {
  return (
    <List
      h={"12.5rem"}
      spacing="19px"
      size="sm"
      px={20}
      center
      mt={17}
      styles={{
        item: {
          color: "rgba(79, 100, 109, 1)",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "23px",
        },
      }}
      icon={
        <Group mt={1}>
          <IconCheck strokeWidth={4} color="rgba(27, 160, 217, 1)" size={12} />
        </Group>
      }
    >
      {points.map((item) => {
        return <List.Item>{item}</List.Item>;
      })}
    </List>
  );
};

export default function TicketInfo() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Group
      mb={{ md: "15rem", base: "3rem" }}
      w="100%"
      className={classes.ticketBg}
    >
      {/* <div className={classes.ticketOverlay}></div> */}
      <Group className={classes.ticketContent}>
        <Container size={1200} w={"100%"}>
          <Flex w={"100%"} justify={"center"} mt={40}>
            <Text tt={"uppercase"} fz={35} fw={700} c={"brand.0"}>
              Ticket Information
            </Text>
          </Flex>

          <ResponsiveGrid />

          <Flex mb={50} direction={"column"} w={"100%"} mt={40}>
            <Text
              w={"100%"}
              ta={"center"}
              tt={"uppercase"}
              fz={35}
              fw={700}
              c={"brand.0"}
            >
              Sponsorship Opportunities
            </Text>

            <div className={classes.gridContainer}>
              {sponsorships.map((item, index) => (
                <div
                  key={index}
                  className={classes.card}
                  style={{ borderColor: item.color }}
                >
                  <Image
                    className={classes.cardImage}
                    src={item.cardImage}
                    alt={item.title}
                  />
                  <div className={classes.content}>
                    <Stack
                      align="center"
                      gap={0}
                      className={classes.horizontalCenter}
                      pos={"absolute"}
                      top={15}
                      w={"100%"}
                    >
                      <Text fw={600} fz="16px" c={"brand.0"}>
                        {item.title}
                      </Text>
                      <Text fw={700} fz="35px" mt={-8} c={"brand.0"}>
                        {item.price}
                      </Text>
                      <Text fw={700} fz="16px" mt={-8} c={"brand.0"}>
                        {item.gst}
                      </Text>
                    </Stack>
                    <Points points={item.points} />
                    <div
                      className={classes.reserveSpot}
                      style={{ backgroundColor: item.color }}
                    >
                      Reserve Your Spot Now!
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Flex>
        </Container>
      </Group> 
    </Group>
  );
}
