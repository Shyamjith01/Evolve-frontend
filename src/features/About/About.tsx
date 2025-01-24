import {
  Container,
  Divider,
  Grid,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import brandStoriesImg1 from "../../../public/Images/brandStoriesImg1.jpg";
import brandStoriesImg2 from "../../../public/Images/brandStoriesImg2.jpg";
import brandStoriesImg3 from "../../../public/Images/brandStoriesImg3.jpg";
import brandStoriesImg4 from "../../../public/Images/brandStoriesImg4.jpg";
import Image from "next/image";
import classes from "./About.module.css";
import starImg from "../../../public/icons/star.png";
import aboutbanner from "../../../public/Images/about_banner.webp";

const Points = ({ points }: { points: string[] }) => {
  return (
    <List
      spacing="19px"
      size="sm"
      center
      mt={12}
      styles={{
        item: {
          color: "white",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "23px",
        },
      }}
      icon={
        <Group mt={1}>
          <Image src={starImg} alt="starImg" />
        </Group>
      }
    >
      {points.map((item) => {
        return <List.Item>{item}</List.Item>;
      })}
    </List>
  );
};

export default function About() {
  return (
    <Group mb={30} className={classes.bg} h={"auto"}>
      <Container size={1200} w={"100%"} my={50}>
        <Stack gap={2}>
          <Text tt={"uppercase"} fw={600} fz={"16px"} c={"brand.1"}>
            About
          </Text>
          <Text tt={"uppercase"} fw={700} fz={"35px"} c={"brand.1"}>
            Brand Stories
          </Text>
          <Grid mt={25} w="100%">
            <Grid.Col span={{ md: 3, base: 6 }}>
              <Image
                className={classes.imgStyle}
                src={brandStoriesImg1}
                alt="brandStoriesImg1"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 3, base: 6 }}>
              <Image
                className={classes.imgStyle}
                src={brandStoriesImg2}
                alt="brandStoriesImg2"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 3, base: 6 }}>
              <Image
                className={classes.imgStyle}
                src={brandStoriesImg3}
                alt="brandStoriesImg3"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 3, base: 6 }}>
              <Image
                className={classes.imgStyle}
                src={brandStoriesImg4}
                alt="brandStoriesImg4"
              />
            </Grid.Col>
          </Grid>
          <Text mt={30} fw={400} fz={16} c={"brand.1"}>
            Brand Stories, based in Kerala, is a premier organization dedicated
            to fostering leadership, creativity, and organizational growth.
            Known for curating impactful events, Brand Stories connects industry
            leaders and changemakers to share knowledge, inspire growth, and
            implement meaningful change.
          </Text>

          <Divider my="70px" color="brand.5" />

          <Grid w="100%">
            <Grid.Col span={{ md: 6, base: 12 }}>
              <Image
                className={classes.aboutBanner}
                src={aboutbanner}
                alt="aboutbanner"
              />
            </Grid.Col>
            <Grid.Col span={{ md: 6, base: 12 }}>
              <Stack gap={5}>
                <Text
                  tt="uppercase"
                  c={"brand.1"}
                  fw={700}
                  fz={{md:"35px",base:"25px"}}
                  lh={"37px"}
                >
                  Who Should <br /> Attend?
                </Text>
                <Points
                  points={[
                    "Entrepreneurs & Business Owners",
                    "Corporate Leaders & Managers",
                    "Young Professionals & Students",
                    "Anyone interested in transforming their organization and career",
                  ]}
                />
              </Stack>

              <Stack gap={5} mt={40}>
                <Text
                  tt="uppercase"
                  c={"brand.1"}
                  fw={700}
                  fz={{md:"35px",base:"25px"}}
                  lh={"37px"}
                >
                  Key Takeaways from <br /> EVOLVE 2025
                </Text>
                <Points
                  points={[
                    "Leadership Mastery: Build a strong, ethical leadership framework.",
                    "Cultural Transformation: Learn to create a culture of trust, accountability, and",
                  ]}
                />
              </Stack>

              <Stack gap={10} mt={40}>
                <Text
                  tt="uppercase"
                  c={"brand.1"}
                  fw={700}
                  fz={{md:"35px",base:"25px"}}
                  lh={"37px"}
                >
                  Key Takeaways from <br /> EVOLVE 2025
                </Text>
                <Points
                  points={[
                    "Enhanced Productivity: Equip yourself with tools to motivate yourself and your team for peak performance.",
                    "Winning Mindset: Cultivate a positive and solution-driven mindset.",
                    "Effective Problem-Solving: Tackle organizational challenges with confidence.",
                  ]}
                />
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Group>
  );
}
