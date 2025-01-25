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
import { IconMail, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../../public/icons/EvolveLogo.png";

export default function Footer() {
  return (
    <Group py={50} pb={20} w={"100%"} bg={"#00425F"}>
      <Container size={1200} w={"100%"}>
        <Grid w={"100%"}>
          <Grid.Col span={{md:3.5,sm:6,xs:12}}>
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
          <Grid.Col span={{md:2,sm:6,xs:12}}>
            <Stack w={"100%"} justify="center">
              <Text fz={"18px"} fw={600} c={"#FFFFFF"} tt={"uppercase"}>
                Quick Links
              </Text>
              <Stack gap={10}>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"} >
                  Home
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"} >
                  About
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"} >
                  Tickets
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}  >
                  Itinerary
                </Text>
                <Text fz={"16px"} fw={400} c={"#FFFFFF"}  >
                  Gallery
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{md:3.5,sm:6,xs:12}}>
            <Stack w={"100%"}  justify="center">
              <Text fz={"18px"} fw={600} c={"#FFFFFF"} tt={"uppercase"}>
                Address
              </Text>
              <Text w={"90%"} fz={"16px"} lh={"24px"} fw={400} c={"#FFFFFF"} >
                2/306, G2, 6th Floor, Technoplaza,Nr.Sarovaram BTH,
                Kannadikadu,Maradu PO, Cochin 682304
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{md:3,sm:6,xs:12}}>
            <Stack w={"100%"}  justify="center">
              <Text fz={"18px"} fw={600} c={"#FFFFFF"} tt={"uppercase"}>
                Get in Touch
              </Text>
              <Stack>
                <Flex gap={8}>
                  <IconPhone color="#FFFFFF" />
                  <Text fw={600} fz={"16px"} c={"#FFFFFF"}>
                    +91 9995185190, 8848085572
                  </Text>
                </Flex>
                <Flex gap={8}>
                  <IconMail color="#FFFFFF" />
                  <Text fw={600} fz={"16px"} c={"#FFFFFF"}>
                    info@thebrandstories.co.in
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider color="#0D6287" my="md" />
        <Flex w="100%" justify="center">
          <Text c={"#FFFFFF"} fw={400} fz={"14px"}>© 2025 Brand Stories. All rights reserved.</Text>
        </Flex>
      </Container>
    </Group>
  );
}
