import { Header } from "@/components/Header/Header";
import classes from "./Banner.module.css";
import {
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

const EstimateCard = ({
  count,
  description,
  bg,
}: {
  count: string;
  description: string;
  bg: string;
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
      <Stack ta={"center"} justify="center" gap={4} align="center">
        <Text c={"brand.0"} fw={700} fz={"35px"}>
          {count}
        </Text>
        <Text
          lh={"18px"}
          w={"60%"}
          c={"brand.0"}
          mt={-10}
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
  return (
    <Group>
      <div className={classes.bannerBg}>
        <div className={classes.overrideContent}>
          <Container size={1450} w={"100%"}>
            <Header />
            <Grid w="100%">
              <Grid.Col span={{ md: 10, base: 12 }}>
                <Flex w={"100%"} justify={"center"} align={"center"}>
                  <Stack gap={0} ml={{ md: 130, bas: 0 }} w="100%">
                    <Text className={classes.outlinedText}>EVOLVE 2025</Text>
                    <Text
                      mt={-10}
                      lh={"41px"}
                      w={"80%"}
                      c={"brand.1"}
                      fz={"37px"}
                      fw={700}
                      className={classes.mainText}
                    >
                      Inject New Vitality into Your Organizational Culture Based
                      on Values & Ethics
                    </Text>
                    <Flex className={classes.windowSecion} mt={10} h={"6rem"} pos={"relative"}>
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
                    <Flex className={classes.mobileSection} mt={20} align={"center"} gap={15} wrap={"wrap"}>
                      <Flex   gap={9} align={"center"}>
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
                    <Flex wrap={"wrap"} gap={15} mt={20}>
                      <Flex
                        ta={"center"}
                        gap={0}
                        justify={"center"}
                        align={"center"}
                        className={classes.rectangleBlurCard}
                      >
                        <Text fz={"35px"} c={"brand.1"} mt={-10} fw={700}>
                          25
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
                        20
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
                        25
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
                        30
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
                  </Stack>
                </Flex>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
        <div className={classes.bgOverlay}></div>
        <Container mt={85} w={"100%"} size={1200}>
          <Grid styles={{ inner: { height: "206px" } }} h={"206px"} w="100%">
            <Grid.Col h={"100%"} span={{ md: 2.4, base: 12 }}>
              <EstimateCard
                bg="#00AE71"
                count="10,000+"
                description="Attendees"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 1.8, base: 6 }}>
              <EstimateCard
                bg="#0066AE"
                count="40+"
                description="Expert Speakers"
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
                    >
                      <Text c={"brand.0"} fw={700} fz={"35px"}>
                        100+
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
                  <EstimateCard bg="#CFD762" count="" description="" />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={{ md: 2.4, base: 6 }}>
              <EstimateCard
                bg="#911AEC"
                count="500+"
                description="HNIs & Family Offices"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 2.4, base: 6 }}>
              <EstimateCard
                bg="#FF8B07"
                count="25+"
                description="Competitive Startups Pitching"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </Group>
  );
}
