import { Container, Divider, Grid, Group, Text } from "@mantine/core";
import { Gallery } from "react-grid-gallery";
import classes from "./Gallery.module.css";
import Img1 from "../../../public/Images/gallery/img1.jpg";
import Img2 from "../../../public/Images/gallery/img2.jpg";
import Img3 from "../../../public/Images/gallery/imgg3.jpg";
import Img4 from "../../../public/Images/gallery/imgg4.jpg";
import Img5 from "../../../public/Images/gallery/imgg5.jpg";
import Img6 from "../../../public/Images/gallery/imgg6.jpg";
import Img7 from "../../../public/Images/gallery/imgg7.jpg";
import Img8 from "../../../public/Images/gallery/imgg8.jpg";
import Img9 from "../../../public/Images/gallery/imgg9.jpg";
import Img10 from "../../../public/Images/gallery/imgg10.jpg";
import Img11 from "../../../public/Images/gallery/imgg11.jpg";
import { useMediaQuery } from "@mantine/hooks";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Image from "next/image";
import { FadeInSection } from "@/components/FadeSection";

interface Image {
  src: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  width: number;
  height: number;
  caption?: string;
  tags?: { value: string; title: string }[];
  isSelected?: boolean;
}

export interface CustomImage extends Image {
  original: string;
}

export default function GallerySec() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const IMAGES: Image[] = [
    {
      src: Img1.src,
      thumbnail: Img1.src,
      thumbnailWidth: 320,
      thumbnailHeight: 874,
      width: isMobile ? 1424 : 1624,
      height: 858,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: Img2.src,
      thumbnail: Img2.src,
      thumbnailWidth: 1024,
      thumbnailHeight: 212,
      width: isMobile ? 1623 : 1224,
      height: 768,
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: Img3.src,
      thumbnail: Img3.src,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      width: isMobile ? 1423 : 1024,
      height: isMobile ? 1021 : 768,
    },
    {
      src: Img4.src,
      thumbnail: Img4.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 1124 : 998,
      height: 768,
      caption: "Mountain View",
    },
    {
      src: Img5.src,
      thumbnail: Img5.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: 1524,
      height: 850,
      caption: "Sunset at Beach",
    },
    {
      src: Img6.src,
      thumbnail: Img6.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 2090 : 1324,
      height: 968,
      caption: "Forest Path",
    },
    {
      src: Img7.src,
      thumbnail: Img7.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 1490 : 1324,
      height: 858,
      caption: "City Lights",
    },
    {
      src: Img8.src,
      thumbnail: Img8.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 1424 : 1224,
      height: 850,
      caption: "Waterfall in Forest",
    },
    {
      src: Img9.src,
      thumbnail: Img9.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 2090 : 1744,
      height: 1268,
      caption: "Snowy Mountain",
    },
    {
      src: Img10.src,
      thumbnail: Img10.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 2090 : 1624,
      height: 1268,
      caption: "Desert Dunes",
    },
    {
      src: Img11.src,
      thumbnail: Img11.src,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      width: isMobile ? 1624 : 1224,
      height: 868,
      caption: "Desert Dunes",
    },
  ];
  const slides = IMAGES.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));
  const [index, setIndex] = useState(-1);
  const currentImage = IMAGES[index];
  const nextIndex = (index + 1) % IMAGES.length;
  const nextImage = IMAGES[nextIndex] || currentImage;
  const prevIndex = (index + IMAGES.length - 1) % IMAGES.length;
  const prevImage = IMAGES[prevIndex] || currentImage;

  const handleClick = (index: number, item: Image) => setIndex(index);

  return (
    <div className={classes.bg}>
      <Container size={1200} mb={20} w={"100%"}>
        <Text ml={2} fz={{ md: 35, base: 25 }} fw={700} mb={15} c="white">
          Gallery
        </Text>

        <FadeInSection y={50}>
          <Gallery
            enableImageSelection={false}
            rowHeight={isMobile ? 280 : 250}
            margin={5}
            onClick={handleClick}
            images={IMAGES}
          />
        </FadeInSection>

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </Container>
    </div>
  );
}
