import { Container, Flex, Grid, Group, List, Stack, Text } from "@mantine/core";
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
          {/* <Grid w="90%" align="center" mt={40} ml={"auto"} mr={"auto"}>
            <Grid.Col pos={"relative"} span={{ md: 6, base: 12 }}>
              <Image
                className={classes.paymentCard}
                src={paymentCard}
                alt="payment"
              />
              <Grid className={classes.positionCenter} w="100%">
                <Grid.Col span={4.5}>
                  <Flex
                    align={"center"}
                    w="100%"
                    direction={"column"}
                    justify={"center"}
                    gap={1}
                  >
                    <Text
                      lh={"23px"}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{md:"18px",sm:"25px",xs:"20px"}}
                      fw={600}
                      className={classes.textgradiant}
                    >
                      Standard <br />
                      Ticket
                    </Text>
                    <Text
                      mt={-4}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{md:"35px",sm:"25px",xs:"20px"}}
                      fw={700}
                      className={classes.textgradiant}
                    >
                      ₹6,000
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col span={6.5}>
                  <Text
                    tt={"uppercase"}
                    ta={"start"}
                    fz={"16px"}
                    fw={600}
                    className={classes.textgradiant}
                  >
                    General admission to all sessions and networking.
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col pos={"relative"} span={{ md: 6, base: 12 }}>
              <Image
                className={classes.paymentCard}
                src={paymentCard}
                alt="payment"
              />
              <Grid className={classes.positionCenter} w="100%">
                <Grid.Col span={4.5}>
                  <Flex
                    align={"center"}
                    w="100%"
                    direction={"column"}
                    justify={"center"}
                    gap={1}
                  >
                    <Text
                      lh={"23px"}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{md:"18px",sm:"25px",xs:"20px"}}
                      fw={600}
                      className={classes.textgradiant}
                    >
                      Standard <br />
                      Ticket
                    </Text>
                    <Text
                      mt={-4}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{md:"35px",sm:"25px",xs:"20px"}}
                      fw={700}
                      className={classes.textgradiant}
                    >
                      ₹5,000
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col span={6.5}>
                  <Text
                    tt={"uppercase"}
                    ta={"start"}
                    fz={"16px"}
                    fw={600}
                    className={classes.textgradiant}
                  >
                    Available until 31st March 2025. Don’t miss the chance to
                    save!
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid> */}

          {/* <Grid w="90%"   align="center" mt={40} ml={"auto"} mr={"auto"}>
            <Grid.Col
              bg={"#FFFFFF"}
              p={0}
              style={{ borderRadius: "10px",overflow:"hidden" }}
              pos={"relative"}
              span={{ md: 6, base: 12 }}
            >
              <Grid w="100%" p={0}>
                <Grid.Col span={4} p={0} pt={7} pos={"relative"}>
                  <Flex
                    align={"center"}
                    w="100%"
                    direction={"column"}
                    justify={"center"}
                    gap={1}
                    pos={"absolute"}
                    style={{ top: "50% ", transform: "translateY(-50%)" }}
                  >
                    <Text
                      lh={"23px"}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{ md: "18px", sm: "25px", xs: "20px" }}
                      fw={600}
                      c={"#000000"}
                    >
                      Standard <br />
                      Ticket
                    </Text>
                    <Text
                      mt={-4}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{ md: "35px", sm: "25px", xs: "20px" }}
                      fw={700}
                      c={"#000000"}
                    >
                      ₹5,000
                    </Text>
                  </Flex>
                  <Image
                    src={golderCard}
                    style={{ objectFit: "cover", height: "100%" }}
                    alt="golderCard"
                  />
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text
                    tt={"uppercase"}
                    ta={"start"}
                    fz={"16px"}
                    fw={600}
                    w={"95%"}
                    c={"#000000"}
                    ml={15}
                  >
                    Available until 31st March 2025. Don’t miss the chance to
                    save!
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col bg={"#FFFFFF"} p={0} style={{ borderRadius: "10px",overflow:"hidden" }} pos={"relative"}  span={{ md: 6, base: 12 }}>
              <Grid w="100%" p={0}>
                <Grid.Col span={4} p={0} pt={7} pos={"relative"}>
                  <Flex
                    align={"center"}
                    w="100%"
                    direction={"column"}
                    justify={"center"}
                    gap={1}
                    pos={"absolute"}
                    style={{ top: "50% ", transform: "translateY(-50%)" }}
                  >
                    <Text
                      lh={"23px"}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{ md: "18px", sm: "25px", xs: "20px" }}
                      fw={600}
                      c={"#000000"}
                    >
                      Standard <br />
                      Ticket
                    </Text>
                    <Text
                      mt={-4}
                      tt={"uppercase"}
                      ta={"center"}
                      fz={{ md: "35px", sm: "25px", xs: "20px" }}
                      fw={700}
                      c={"#000000"}
                    >
                      ₹5,000
                    </Text>
                  </Flex>
                  <Image
                    src={golderCard}
                    style={{ objectFit: "cover", height: "100%" }}
                    alt="golderCard"
                  />
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text
                    tt={"uppercase"}
                    ta={"start"}
                    fz={"16px"}
                    fw={600}
                    w={"95%"}
                    c={"#000000"}
                    ml={15}
                  >
                    Available until 31st March 2025. Don’t miss the chance to
                    save!
                  </Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid> */}
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
                    >
                      <Text fw={600} fz="16px" c={"brand.0"}>
                        Title Sponsor
                      </Text>
                      <Text fw={700} fz="35px" mt={-8} c={"brand.0"}>
                        ₹3,50,000
                      </Text>
                      <Text fw={700} fz="16px" mt={-8} c={"brand.0"}>
                        + 18% GST
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
