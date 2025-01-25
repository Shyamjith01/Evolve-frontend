import { Card, Container, Flex, Grid, Group, Stack, Text } from "@mantine/core";
import eventImg from "../../../public/Images/eventImg.webp";
import Image from "next/image";
import classes from "./EventInfo.module.css";
import roundedIcon from "../../../public/icons/roundedIcon.png";
import shivakeraImg from "../../../public/Images/shivakera.webp";
import roundedBg from "../../../public/icons/roundedBgIcon.png";
import personImg2 from "../../../public/Images/person2.webp";
import personImg3 from "../../../public/Images/person3.webp";

export default function EventInfo() {
  return (
    <>
      <Group bg={"brand.2"} h={"auto"}>
        <Container size={1200} w={"100%"} my={50}>
          <Grid align="center" mt={"auto"} mb={"auto"} w={"100%"}>
            <Grid.Col span={{ md: 4.3, base: 12 }}>
              <Flex w="100%" justify={"start"}>
                <div className={classes.roundedImg}>
                  <Image
                    src={eventImg}
                    className={classes.roundedImgInner}
                    alt="event image"
                  />
                  <Image
                    className={classes.roundedIcon}
                    src={roundedIcon}
                    alt="event image"
                  />
                  <Image
                    className={classes.roundedIconBg}
                    src={roundedBg}
                    alt="event image"
                  />
                </div>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ md: 7, base: 12 }}>
              <Stack gap={5}>
                <Text tt={"uppercase"} fw={600} fz={16} c={"brand.1"}>
                  About
                </Text>
                <Text tt={"uppercase"} fw={700} fz={"35px"} c={"brand.1"}>
                  The event
                </Text>
                <Text
                  tt={"uppercase"}
                  fw={400}
                  fz={"16px"}
                  lh={"30px"}
                  c={"brand.1"}
                >
                  EVOLVE 2025 is an exclusive one-day event designed to inspire
                  professionals and organizations to adopt a strong leadership
                  mindset, create a culture of trust, and inject vitality into
                  their work environments through values and ethics. Guided by
                  globally renowned motivational speaker Mr. Shiv Khera, this
                  event will provide you with practical tools and strategies for
                  personal and organizational growth.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Group>
      <Group h={"auto"} mih={"2rem"} py={50}>
        <Grid w={"100%"} align="center">
          <Grid.Col pos={"relative"} span={{ md: 6, base: 12 }}>
            <Card className={classes.leftSecEmptyCard}></Card>
            <Flex align={"center"} className={classes.positionCard}>
              <Text
                opacity={0.4}
                fw={700}
                fz={{md:"52px",base:"45px"}}
                c={"#FFFFFF"}
                tt={"uppercase"}
                className={classes.rotateText}
              >
                Mr. Shiv Khera
              </Text>
              <Grid gutter={15} w={"100%"}>
                <Grid.Col span={6}>
                  <Image
                    src={shivakeraImg}
                    alt="photo"
                    className={classes.photoWithsmallBorder}
                  />
                </Grid.Col>
                <Grid.Col span={5}>
                  <Grid w="100%" gutter={0} mt={10}>
                    <Grid.Col h={"187px"} span={12}>
                      <Image
                        src={personImg2}
                        alt="photo"
                        className={`${classes.photoWithsmallBorderShort} ${classes.rightBottomSharpBorder}`}
                      />
                    </Grid.Col>
                    <Grid.Col h={"187px"} span={12}>
                      <Image
                        src={personImg3}
                        alt="photo"
                        className={`${classes.photoWithsmallBorderShort} ${classes.rightTopSharpBorder}`}
                      />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Flex>
          </Grid.Col>
          <Grid.Col ml={{md:-30,base:10}} span={{ md: 6, base: 12 }}>
            <Stack gap={9} className={classes.rightSec}>
              <Text tt={"uppercase"} fw={600} fz={16} c={"brand.3"}>
                About
              </Text>
              <Text mt={-9} tt={"uppercase"} fw={700} fz={35} c={"brand.2"}>
                Mr. Shiv Khera
              </Text>
              <Text fw={600} fz={"16px"} c={"brand.4"}>
                Unlock Your True Potential with Shiv Khera!
              </Text>
              <Text fz={"16px"} fw={400} c={"brand.4"} lh={"30px"}>
                Renowned International Motivational Speaker, Author, and
                Leadership Coach <br /> Author of the Best-Seller: You Can Win{" "}
                <br /> Over 25+ years of experience inspiring individuals and
                organizations worldwide Trained millions of professionals <br />
                across 20+ countries Trusted advisor to Fortune 500 companies
              </Text>
              <Text
                className={classes.textgradiant}
                fz={"16px"}
                fw={600}
                c={"brand.4"}
                lh={"30px"}
              >
                Join Us for an Exclusive One Day Training Session
              </Text>
            </Stack>
          </Grid.Col>
        </Grid> 
      </Group>
    </>
  );
}
