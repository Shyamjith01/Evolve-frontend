import { Container, Flex, Stack, Text } from "@mantine/core";
import jainamImg from "../../../public/Images/sponsers/jainam.png";
import aliceBlueImg from "../../../public/Images/sponsers/aliceblue.png";
import acumenImg from "../../../public/Images/sponsers/acumen.png";
import tradeJiniImg from "../../../public/Images/sponsers/tradejini.png";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function SponseredSection() {
  const autoplay = useRef(Autoplay({ delay: 2000,playOnInit:true }));

  console.log(autoplay,"autoplay")
  return (
    <Container size={1200} w={"100%"}>
      <Carousel 
        withIndicators
        withControls={false}
        height={"auto"}
        plugins={[autoplay.current]}
        loop
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Stack gap={40} my={{ md: 30, base: 90 }}>
            <Text fz={35} fw={700} c="brand.2">
              Co Sponsered by
            </Text>
            {/* <Flex mb={50} wrap={"wrap"} gap={50} align={"center"}>
              <Image src={jainamImg} alt="jainamImg" />
              <Image src={aliceBlueImg} alt="jainamImg" />
              <Image src={acumenImg} alt="jainamImg" />
              <Image src={tradeJiniImg} alt="jainamImg" />
            </Flex> */}
          </Stack>
        </Carousel.Slide>
        <Carousel.Slide>
          <Carousel.Slide>
            <Stack gap={40} my={{ md: 30, base: 90 }}>
              <Text fz={35} fw={700} c="brand.2">
                Powered by
              </Text>
              <Flex mb={50} wrap={"wrap"} gap={50} align={"center"}>
                <Image src={jainamImg} alt="jainamImg" />
                <Image src={aliceBlueImg} alt="jainamImg" />
                <Image src={acumenImg} alt="jainamImg" />
                <Image src={tradeJiniImg} alt="jainamImg" />
              </Flex>
            </Stack>
          </Carousel.Slide>
        </Carousel.Slide>
        <Carousel.Slide>
          <Carousel.Slide>
            <Stack gap={40} my={{ md: 30, base: 90 }}>
              <Text fz={35} fw={700} c="brand.2">
                Co - Powered by
              </Text>
              <Flex mb={50} wrap={"wrap"} gap={50} align={"center"}>
                <Image src={jainamImg} alt="jainamImg" />
                <Image src={aliceBlueImg} alt="jainamImg" />
                <Image src={acumenImg} alt="jainamImg" />
                <Image src={tradeJiniImg} alt="jainamImg" />
              </Flex>
            </Stack>
          </Carousel.Slide>
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
}
