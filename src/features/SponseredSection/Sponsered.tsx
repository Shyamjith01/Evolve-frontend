import { Card, Container, Flex, ScrollArea, Stack, Text } from "@mantine/core";
import jainamImg from "../../../public/Images/sponsers/jainam.png";
import aliceBlueImg from "../../../public/Images/sponsers/aliceblue.png";
import acumenImg from "../../../public/Images/sponsers/acumen.png";
import tradeJiniImg from "../../../public/Images/sponsers/tradejini.png";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import AcumenLogo from "../../../public/Images/sponsers/acumen.png";
import AliceBlueLogo from "../../../public/Images/sponsers/aliceblue.png";
import JainamLogo from "../../../public/Images/brands/jainam.webp";
import BmwLogo from "../../../public/Images/brands/BMW.svg.png";
import lexusLog from "../../../public/Images/brands/lexus-logo-png-transparent.png";
import logo from "../../../public/Images/brands/logo.png";
import royalAssistancelog from "../../../public/Images/brands/logos-07-1024x1024.png";
import MygLogo from "../../../public/Images/brands/my g.webp";
import { useMediaQuery } from "@mantine/hooks";

const SponseredArray = [
  {
    name: "Co Sponsered by",
    images: [],
  },
  {
    name: "Powered by",
    images: [jainamImg, aliceBlueImg, acumenImg, tradeJiniImg],
  },
  {
    name: "Co - Powered by",
    images: [jainamImg, aliceBlueImg, acumenImg, tradeJiniImg],
  },
];

const brands = [
  {
    name: " Brands Associated with so far",
    images: [
      AcumenLogo,
      royalAssistancelog,

      JainamLogo,
      BmwLogo,
      lexusLog,
      logo,
      MygLogo,
      AliceBlueLogo,

    ],
  },
];

export default function SponseredSection({
  brandAssosiated,
}: {
  brandAssosiated?: boolean;
}) {
  const autoplay = useRef(Autoplay({ delay: 2000, playOnInit: true }));

  const matches = useMediaQuery("(max-width: 640px)");

  console.log(autoplay, "autoplay");
  return (
    <Container  size={1200} w={"100%"}>
      <Carousel
        withIndicators
        withControls={false}
        align={"start"}
        draggable={!brandAssosiated}
        height={"auto"}
        plugins={brandAssosiated ? [] : [autoplay.current]}
        loop
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {!brandAssosiated &&
          SponseredArray.map((item) => {
            return (
              <Carousel.Slide>
                <Carousel.Slide>
                  <Stack gap={40} my={{ md: 30, base: 90 }}>
                    <Text fz={35} fw={700} c="brand.2">
                      {item.name}
                    </Text>
                    <Flex mb={50} wrap={"wrap"} gap={50} align={"center"}>
                      {item.images.map((img) => {
                        return <Image src={img} alt="jainamImg" />;
                      })}
                    </Flex>
                  </Stack>
                </Carousel.Slide>
              </Carousel.Slide>
            );
          })}
        {brandAssosiated &&
          brands.map((item) => {
            return (
              <Carousel.Slide mt={20}>
                <Stack gap={40} my={{ md: 30, base: 90 }}>
                  <Text fz={{ md: 35, base: 25 }} fw={700} c="brand.2">
                    {item.name}
                  </Text>
                  <Flex
                    mb={50}
                    h={"100%"}
                    wrap={"wrap"}
                    gap={40}
                    align={"center"}
                    justify={matches ? "center" : "start"}
                  >
                    {item.images.map((img) => {
                      return (
                        <Image
                          style={{
                            width: matches ? "5rem" : "10rem",
                            height: matches ? "3rem" : "4rem",
                            objectFit: "contain",
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                          src={img}
                          alt="jainamImg"
                        />
                      );
                    })}
                  </Flex>
                </Stack>
              </Carousel.Slide>
            );
          })}
      </Carousel>
    </Container>
  );
}
