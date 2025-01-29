import { Header } from "@/components/Header/Header";
import classes from "./Banner.module.css";
import {
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import calendarWithStar from "../../../public/icons/calendarwithStar.png";
import Image from "next/image";
import Timeframe from "../../../public/icons/timeframe.png";
import locationframe from "../../../public/icons/location.png";
import { useEffect, useState } from "react";
import { log } from "node:console";
import CountUp from "react-countup";

const EstimateCard = ({
  count,
  description,
  bg,
  specialCase,
}: {
  count: number | null;
  description: string;
  bg: string;
  specialCase?: boolean;
}) => {
  return (
    <Card
      display={"flex"}
      radius={"20px"}
      style={{ justifyContent: "center" }}
      w={"100%"}
      h={"100%"}
      bg={bg}
    >
      <Stack
        ta={"center"}
        justify="center"
        className={classes.couterWrapp}
        gap={4}
        align="center"
        style={
          specialCase
            ? {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }
            : {}
        }
      >
        {count && (
          <Text
            c={"brand.0"}
            fw={700}
            className={classes.countText}
            fz={"35px"}
          >
            <CountUp end={count} duration={4} /> {count > 1 && "+"}
          </Text>
        )}

        <Text
          lh={"18px"}
          w={"60%"}
          c={"brand.0"}
          mt={specialCase ? 0 : -10}
          ta={specialCase ? "start" : "center"}
          pl={specialCase ? 10 : 0}
          tt={"uppercase"}
          fw={600}
          fz={"16px"}
        >
          {description}
        </Text>
      </Stack>
    </Card>
  );
};

export default function Banner() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date("2025-04-24T00:00:00"); // Set your target date here

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const secondsRemaining = Math.floor(timeDifference / 1000);
        const minutesRemaining = Math.floor(secondsRemaining / 60);
        const hoursRemaining = Math.floor(minutesRemaining / 60);
        const daysRemaining = Math.floor(hoursRemaining / 24);

        setDays(daysRemaining);
        setHours(hoursRemaining % 24);
        setMinutes(minutesRemaining % 60);
        setSeconds(secondsRemaining % 60);
      } else {
        clearInterval(intervalId); // Stop the timer when the target date is reached
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Group>
      <div className={classes.bannerBg}>
        <div className={classes.overrideContent}>
          <Container size={1450} w={"100%"}>
            <Header />
            <Grid w="100%">
              <Grid.Col span={{ md: 10, base: 12 }}>
                <Flex w={"100%"} justify={"center"} align={"center"}>
                  <Stack
                    gap={4}
                    mt={{ md: 30, base: 0 }}
                    ml={{ md: 130, bas: 0 }}
                    w="100%"
                  >
                    <Text py={10} className={classes.outlinedText}>
                      SHIVA KHERA @ KOCHI
                    </Text>
                    <Text
                      mt={-10}
                      lh={"41px"}
                      w={"80%"}
                      tt={"uppercase"}
                      c={"brand.1"}
                      fz={"37px"}
                      fw={700}
                      className={classes.mainText}
                    >
                      Inject New Vitality into Your Organizational Culture Based
                      on Values & Ethics
                    </Text>
                    <Flex
                      className={classes.windowSecion}
                      mt={10}
                      h={"6rem"}
                      pos={"relative"}
                    >
                      <Text
                        tt="uppercase"
                        fz="14px"
                        fw="600"
                        c={"brand.1"}
                        className={classes.rotateText}
                      >
                        Event Details
                      </Text>
                      <Group pos={"relative"} w={"70%"}>
                        <Card
                          ml={27}
                          h={"6.1rem"}
                          className={classes.blurDetSection}
                          w={"100%"}
                        ></Card>
                        <Flex
                          gap={20}
                          pos={"absolute"}
                          left={40}
                          style={{ zIndex: 10 }}
                          wrap={"wrap"}
                        >
                          <Flex ml={10} gap={9} align={"center"}>
                            <Image src={calendarWithStar} alt="calendar" />
                            <Stack gap={2}>
                              <Text
                                c={"brand.1"}
                                fz={{
                                  md: "17px",
                                  sm: "20px",
                                  xs: "16px",
                                  lg: "19px",
                                  xl: "27px",
                                }}
                                fw={600}
                                mb={-10}
                                tt={"uppercase"}
                              >
                                April 24
                              </Text>
                              <Text
                                c={"brand.1"}
                                fz={"14px"}
                                fw={600}
                                tt={"uppercase"}
                              >
                                Thursday, 2025
                              </Text>
                            </Stack>
                          </Flex>
                          <Divider size="sm" orientation="vertical" />
                          <Flex wrap={"wrap"} gap={9} align={"center"}>
                            <Image src={Timeframe} alt="timeframe" />
                            <Text
                              tt={"uppercase"}
                              fz={"14px"}
                              fw={600}
                              c={"brand.1"}
                            >
                              8:00 AM – 5:00 PM
                            </Text>
                          </Flex>
                          <Divider size="sm" orientation="vertical" />
                          <Flex gap={9} align={"center"}>
                            <Image src={locationframe} alt="locationframe" />
                            <Text
                              tt={"uppercase"}
                              fz={"14px"}
                              fw={600}
                              c={"brand.1"}
                            >
                              Gokulam Park Hotel, Kaloor
                            </Text>
                          </Flex>
                        </Flex>
                      </Group>
                    </Flex>
                    <Flex
                      className={classes.mobileSection}
                      mt={20}
                      align={"center"}
                      gap={15}
                      wrap={"wrap"}
                    >
                      <Flex gap={9} align={"center"}>
                        <Image src={calendarWithStar} alt="calendar" />
                        <Stack gap={2}>
                          <Text
                            c={"brand.1"}
                            fz={{
                              md: "17px",
                              sm: "20px",
                              xs: "16px",
                              lg: "19px",
                              xl: "27px",
                            }}
                            fw={600}
                            mb={-10}
                            tt={"uppercase"}
                          >
                            April 24
                          </Text>
                          <Text
                            c={"brand.1"}
                            fz={"14px"}
                            fw={600}
                            tt={"uppercase"}
                          >
                            Thursday, 2025
                          </Text>
                        </Stack>
                      </Flex>
                      <Flex wrap={"wrap"} gap={9} align={"center"}>
                        <Image src={Timeframe} alt="timeframe" />
                        <Text
                          tt={"uppercase"}
                          fz={"14px"}
                          fw={600}
                          c={"brand.1"}
                        >
                          8:00 AM – 5:00 PM
                        </Text>
                      </Flex>
                      <Flex ml={0} gap={9} align={"center"}>
                        <Image src={locationframe} alt="locationframe" />
                        <Text
                          tt={"uppercase"}
                          fz={"14px"}
                          fw={600}
                          c={"brand.1"}
                        >
                          Gokulam Park Hotel, Kaloor
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex className={classes.timeWrapDiv} gap={15} mt={20}>
                      <Flex
                        ta={"center"}
                        gap={0}
                        justify={"center"}
                        align={"center"}
                        className={classes.rectangleBlurCard}
                      >
                        <Text fz={"35px"} c={"brand.1"} mt={-10} fw={700}>
                          {days}
                        </Text>
                        <Text
                          fz={"16px"}
                          c={"brand.1"}
                          mt={-10}
                          fw={700}
                          tt={"uppercase"}
                        >
                          days
                        </Text>
                      </Flex>
                      <Flex
                        ta={"center"}
                        gap={0}
                        justify={"center"}
                        align={"center"}
                        className={classes.rectangleBlurCard}
                      >
                        <Text fz={"35px"} c={"brand.1"} mt={-10} fw={700}>
                          {hours}
                        </Text>
                        <Text
                          fz={"16px"}
                          c={"brand.1"}
                          mt={-10}
                          fw={700}
                          tt={"uppercase"}
                        >
                          hours
                        </Text>
                      </Flex>
                      <Flex
                        ta={"center"}
                        gap={0}
                        justify={"center"}
                        align={"center"}
                        className={classes.rectangleBlurCard}
                      >
                        <Text fz={"35px"} c={"brand.1"} mt={-10} fw={700}>
                          {minutes}
                        </Text>
                        <Text
                          fz={"16px"}
                          c={"brand.1"}
                          mt={-10}
                          fw={700}
                          tt={"uppercase"}
                        >
                          minutes
                        </Text>
                      </Flex>
                      <Flex
                        ta={"center"}
                        gap={0}
                        justify={"center"}
                        align={"center"}
                        className={classes.rectangleBlurCard}
                      >
                        <Text fz={"35px"} c={"brand.1"} mt={-10} fw={700}>
                          {seconds}
                        </Text>
                        <Text
                          fz={"16px"}
                          c={"brand.1"}
                          mt={-10}
                          fw={700}
                          tt={"uppercase"}
                        >
                          seconds
                        </Text>
                      </Flex>
                    </Flex>
                    <Button
                      mt={20}
                      color="#1BA0D9"
                      onClick={() => {
                        const registerElement =
                          document.getElementById("register");
                        if (registerElement) {
                          registerElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      bd={"1px solid #FFFF"}
                      className={classes.btnClass}
                      variant="outlined"
                      radius={"30px"}
                      w={"fit-content"}
                    >
                      Register Now
                    </Button>
                  </Stack>
                </Flex>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
        <div className={classes.bgOverlay}></div>
        <Container
          mt={35} 
          className={classes.progressContainer}
          w={"100%"}
          size={1200}
        >
          <Grid
            justify="center"
            styles={{ inner: { height: "206px" } }}
            h={"206px"}
            w="100%"
          >
            <Grid.Col
              h={"100%"}
              span={{ md: 3, base: 12 }}
              className={classes.estimateContainer}
            >
              <EstimateCard bg="#00AE71" count={1000} description="Attendees" />
            </Grid.Col>
            <Grid.Col span={{ md: 1.8, base: 6 }}>
              <EstimateCard
                bg="#0066AE"
                count={1}
                description="Expert Speaker"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 2.4, base: 6 }}>
              <Grid w={"100%"}>
                <Grid.Col span={12} h={"135px"}>
                  <Card
                    display={"flex"}
                    radius={"20px"}
                    style={{ justifyContent: "center" }}
                    w={"100%"}
                    h={"100%"}
                    bg={"#00AE71"}
                    pt={-10}
                  >
                    <Stack
                      ta={"center"}
                      justify="center"
                      gap={4}
                      align="center"
                      className={classes.couterWrapp}
                    >
                      <Text
                        className={classes.countText}
                        c={"brand.0"}
                        fw={700}
                        fz={"35px"}
                      >
                        <CountUp end={100} duration={4} />+
                      </Text>
                      <Text
                        lh={"18px"}
                        w={"50%"}
                        c={"brand.0"}
                        mt={-10}
                        tt={"uppercase"}
                        fw={600}
                        fz={"16px"}
                      >
                        VCs & Investors
                      </Text>
                    </Stack>
                  </Card>
                </Grid.Col>
                <Grid.Col span={12} h={"70px"}>
                  <EstimateCard
                    specialCase
                    bg="#CFD762"
                    count={20}
                    description="STALLS"
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={{ md: 2.4, base: 6 }}>
              <EstimateCard
                bg="#911AEC"
                count={500}
                description="HNIs & Family Offices"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 2.4, base: 6 }}>
              <EstimateCard
                bg="#FF8B07"
                count={null}
                description="Networking and learning"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </Group>
  );
}
