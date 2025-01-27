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
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../../public/icons/EvolveLogo.png";
import classes from "./Footer.module.css"
import Link from "next/link";

export default function Footer() {
  return (
    <Group py={50} pb={20} w={"100%"} bg={"#00425F"}>
      <Container size={1200} w={"100%"}>
        <Grid w={"100%"}>
          <Grid.Col span={{ md: 3.5, sm: 6, xs: 12 }}>
            <Stack>
              <Image src={logo} alt="logo" />
              <Text
                c={"#FFFFFF"}
                lh={"28px"}
                tt="uppercase"
                fw={600}
                fz={"20px"}
              >
                EVOLVE 2025 – Rise, Lead, <br /> and Soar Higher with a <br />{" "}
                Winning Edge!
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ md: 2, sm: 6, xs: 12 }}>
            <Stack w={"100%"} justify="center">
              <Text fz={"18px"} fw={600} c={"#FFFFFF"} tt={"uppercase"}>
                Quick Links
              </Text>
              <Stack gap={10}>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}>
                  Home
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}>
                  About
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}>
                  Tickets
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}>
                  Itinerary
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}>
                  Gallery
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ md: 3.5, sm: 6, xs: 12 }}>
            <Stack w={"100%"} justify="center">
              <Text fz={"18px"} fw={600} c={"#FFFFFF"} tt={"uppercase"}>
                Address
              </Text>
              <Text w={"90%"} fz={"16px"} lh={"24px"} fw={400} c={"#FFFFFF"}>
                2/306, G2, 6th Floor, Technoplaza,Nr.Sarovaram BTH,
                Kannadikadu,Maradu PO, Cochin 682304
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ md: 3, sm: 6, xs: 12 }}>
            <Stack w={"100%"} justify="center">
              <Text fz={"18px"} fw={600} c={"#FFFFFF"} tt={"uppercase"}>
                Get in Touch
              </Text>
              <Stack>
                <Flex gap={8}>
                  <IconPhone color="#FFFFFF" />
                  <Flex c={"#ffff"} gap={2}><Link className={classes.phoneNumberText} href="tel:+91 9995185190">+91 9995185190</Link>,<Link className={classes.phoneNumberText} href={"tel:8848085572"}> 8848085572</Link></Flex>

                </Flex>
                <Flex gap={8}>
                  <IconMail color="#FFFFFF" />
                  <Text fw={600} fz={"16px"} c={"#FFFFFF"}>
                    <Link className={classes.phoneNumberText} href={"mailto:info@thebrandstories.co.in"}>info@thebrandstories.co.in</Link>
                  </Text>
                </Flex>
              </Stack>
              <Flex mt={10} gap={10}>
                <Card
                  bg="transparent"
                  h={30}
                  w={30}
                  p={6}
                  radius={"50%"}
                  bd={"1px solid #FFFFFF"}
                >
                  <Flex
                    w={"100%"}
                    justify={"center"}
                    align={"center"}
                    h={"100%"}
                  >
                    <IconBrandWhatsapp strokeWidth={1.7} color="#FFFFFF" />
                  </Flex>
                </Card>
                <Card
                  bg="transparent"
                  h={30}
                  w={30}
                  p={6}
                  radius={"50%"}
                  bd={"1px solid #FFFFFF"}
                >
                  <Flex
                    w={"100%"}
                    justify={"center"}
                    align={"center"}
                    h={"100%"}
                  >
                    <IconBrandFacebook strokeWidth={1.7} color="#FFFFFF" />
                  </Flex>
                </Card>
                <Card
                  bg="transparent"
                  p={6}
                  h={30}
                  w={30}
                  radius={"50%"}
                  bd={"1px solid #FFFFFF"}
                >
                  <Flex
                    w={"100%"}
                    justify={"center"}
                    align={"center"}
                    h={"100%"}
                  >
                    <IconBrandInstagram strokeWidth={1.7} color="#FFFFFF" />
                  </Flex>
                </Card>
                <Card
                  bg="transparent"
                  p={6}
                  h={30}
                  w={30}
                  radius={"50%"}
                  bd={"1px solid #FFFFFF"}
                >
                  <Flex
                    w={"100%"}
                    justify={"center"}
                    align={"center"}
                    h={"100%"}
                  >
                    <IconBrandYoutube strokeWidth={1.7} color="#FFFFFF" />
                  </Flex>
                </Card>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider color="#0D6287" my="md" />
        <Flex w="100%" justify="center">
          <Text c={"#FFFFFF"} fw={400} fz={"14px"}>
            © 2025 Brand Stories. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Group>
  );
}
