import { Button, Container, Flex, Grid, Text } from "@mantine/core";
// import salesImg1 from "../../../public/Images/sales1.png";
import salesImg1 from "../../../public/Images/stallMainImg.jpeg";

import salesImg2 from "../../../public/Images/sales2.png";
import salesImg3 from "../../../public/Images/sales3.webp";
import salesImg4 from "../../../public/Images/sales4.png";
import salesImg5 from "../../../public/Images/sales5.png";
import salesImg6 from "../../../public/Images/sales6.png";

import Image from "next/image";
import classes from "./Sales.module.css";
import { FadeInSection } from "@/components/FadeSection";

export default function SalesSection() {
  return (
    <Container mb={50} mt={{ md: 0, base: -80 }} size={1200} w={"100%"}>
      <Text tt={"uppercase"} c={"brand.2"} fw={700} fz={{ md: 35, base: 25 }}>
        Stalls
      </Text>

      <FadeInSection y={50}>
        <Grid w="100%" mt={35}>
          <Grid.Col span={{ md: 12, sm: 6, xs: 12 }}>
            <Image
              className={classes.raduisImg}
              src={salesImg1}
              alt="salesImg1"
            />
          </Grid.Col>
        </Grid>
      </FadeInSection>
      <FadeInSection y={50}>
        <Flex w="100%" my={28} justify="center">
          <Text
            fw={700}
            fz={{ md: "25px", base: "20px" }}
            className={classes.textgradiant}
            tt={"uppercase"}
            w={{ md: "65%", bas: "100%" }}
            ta={"center"}
            lh={{ md: "37px", base: "normal" }}
          >
            Seats and sponsorship slots are limited and assigned on a
            first-come, first-serve basis. Don’t miss this opportunity to be
            part of a transformative event.
          </Text>
        </Flex>
      </FadeInSection>
      <FadeInSection y={40}>
        <Flex mb={40}>
          <Button
            h={"51px"}
            w={"177px"}
            ta={"center"}
            radius={"85px"}
            ml={"auto"}
            mr={"auto"}
            bg={"brand.8"}
            justify="center"
          >
            <Text
              ta={"center"}
              fw={600}
              c={"brand.0"}
              fz={"16px"}
              tt={"uppercase"}
            >
              Register Now
            </Text>
          </Button>
        </Flex>
      </FadeInSection>
    </Container>
  );
}
