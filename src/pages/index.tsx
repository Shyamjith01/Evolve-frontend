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
      <Footer />
    </>
  );
}
