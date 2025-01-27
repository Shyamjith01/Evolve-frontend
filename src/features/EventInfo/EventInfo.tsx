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
      <Group  bg={"brand.2"} h={"auto"}>
        <Container size={1200} w={"100%"} my={50}>
          <Grid align="center" mb={"auto"} w={"100%"}>
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
              <Stack gap={1}>
                <Text tt={"uppercase"} fw={600} fz={16} c={"brand.1"}>
                  About
                </Text>
                <Text tt={"uppercase"} fw={700} fz={"35px"} c={"brand.1"}>
                  The event
                </Text>
                <Text 
                  fw={400}
                  fz={"16px"}
                  lh={"27px"}
                  c={"brand.1"}
                >
                  <strong>EVOLVE 2025</strong> is a transformative one-day event crafted to
                  inspire professionals and organizations to embrace a
                  leadership mindset grounded in trust, ethics, and values,
                  fostering an environment of growth and innovation. Featuring
                  globally acclaimed motivational speaker Mr. Shiv Khera, this
                  event delivers a powerful blend of insights, tools, and
                  actionable strategies to drive personal and organizational
                  success. Attendees will explore key principles of leadership
                  development, effective collaboration, and sustainable
                  progress, gaining the clarity and confidence needed to
                  navigate challenges and create meaningful impact in their
                  workspaces. With its engaging sessions and thought-provoking
                  content, <strong>EVOLVE 2025</strong> serves as a catalyst for unlocking
                  potential, building strong teams, and shaping a future defined
                  by purpose and excellence.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Group>
      <Group style={{overflow:"hidden"}} h={"auto"} mih={"2rem"} py={50}>
        <Grid w={"100%"} align="center">
          <Grid.Col pos={"relative"} span={{ md: 6, base: 12 }}>
            <Card className={classes.leftSecEmptyCard}></Card>
            <Flex align={"center"} className={classes.positionCard}>
              <Text
                opacity={0.4}
                fw={700}
                fz={{ md: "52px", base: "45px" }}
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
          <Grid.Col ml={{ md: -30, base: 10 }} span={{ md: 6, base: 12 }}>
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
              <Text fz={"16px"} fw={400} w={"94%"} c={"brand.4"} lh={"27px"}>
                Mr. Shiv Khera is a globally renowned motivational speaker,
                best-selling author, and trusted leadership coach, dedicated to
                empowering individuals and organizations to achieve their
                highest potential. Known for his best-seller, "You Can Win," he
                has inspired millions through his thought-provoking insights and
                practical approach to personal and professional growth. With
                over 25 years of experience, Mr. Khera has trained professionals
                across diverse industries in more than 20 countries,
                transforming lives and creating impactful leaders. His expertise
                is sought after by Fortune 500 companies as a trusted advisor,
                offering strategies to enhance productivity, foster innovation,
                and build ethical, high-performing teams. Join Mr. Shiv Khera
                for an exclusive one-day training session and discover tools and
                techniques to unlock your potential, overcome challenges, and
                create meaningful success.
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
