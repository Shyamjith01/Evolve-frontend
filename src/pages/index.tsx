import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/features/Banner/Banner";
import SponseredSection from "@/features/SponseredSection/Sponsered";
import EventInfo from "@/features/EventInfo/EventInfo";
import Schedules from "@/features/ProgramSchedules/Schedules";
import TicketInfo from "@/features/TicketInfo/TicketInfo";
import About from "@/features/About/About";
import SalesSection from "@/features/Sales/SalesSection";
import Footer from "@/components/Footer/Footer";
import "react-phone-input-2/lib/style.css";
import "@mantine/carousel/styles.css";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import GallerySec from "@/features/Gallery/GallerySec";
import { FadeInSection } from "@/components/FadeSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Banner />
      <SponseredSection />
      <EventInfo />
      <About />
      <Schedules />
      <TicketInfo />
      <SalesSection />
      <GallerySec />
      <div id="sponsered" style={{ marginTop: "-10px" }}>
        <SponseredSection brandAssosiated />
      </div>

      <Footer />
      <motion.div
        className={"whatsappContainer"}
        animate={{ y: -440 }}
        transition={{ type: "spring" }}
      >
        <Group
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://wa.me/9746095931", "_blank")}
        >
          <IconBrandWhatsapp color="white" />
          <span className="wave"></span>
        </Group>
      </motion.div>
    </>
  );
}
