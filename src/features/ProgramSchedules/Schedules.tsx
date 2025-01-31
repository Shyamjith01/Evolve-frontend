import {
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
// import rightIcon from "../../../public/icons/rightIcon.png";
import rightIcon from "../../../public/icons/right-arrow.svg";

import Image from "next/image";
import classes from "./Shedules.module.css";
import { IconClock } from "@tabler/icons-react";

const ScheduledItem = ({
  time,
  description,
  highlightText,
}: {
  time: string;
  description: string;
  highlightText?: string;
}) => {
  return (
    <>
      <Flex wrap={"wrap"} gap={18} align={"center"}>
        <Card
          style={{ overflow: "visible" }}
          pos={"relative"}
          py={7}
          px={17}
          bg={"brand.2"}
          radius={"23.5px"}
        >
          <Flex align={"center"} gap={5}>
            <IconClock strokeWidth={1.8} color="white" size={18} />
            <Text c={"brand.0"} fz={{md:"16px",base:"14px"}} fw={600}>
              {time}
            </Text>
          </Flex>

          <Group className={classes.positionCenter}>
            <Image src={rightIcon} quality={100} alt={"right"} />
          </Group>
        </Card>
        <Text
          display={{ md: "flex", base: "content" }}
          c={"brand.4"}
          fw={600}
          fz={{md:"18px",base:"14px"}}
        >
          {highlightText && <span
            style={{
              color: "#1BA0D9",
              fontWeight: 600,
              marginRight: "8px",
              width: "fit-content",
            }}
          >
            {highlightText ? `${highlightText}: ` : ""}
          </span>}
          {description}
        </Text>
      </Flex>
      <Divider color="brand.6" my="10px" />
    </>
  );
};

export default function Schedules() {
  return (
    <Container size={1200} w={"100%"} my={50}>
      <Group my={30}>
        <Text fz={"35px"} c={"brand.2"} fw={700}>
          Program Schedule
        </Text>

        <Stack w="100%" mt={25}>
          <ScheduledItem
            time={"08:00 AM - 09:00 AM"}
            description={
              "Welcome Address	Event kickoff by Brand Stories representatives."
            }
          />
          <ScheduledItem
            time={"09:00 AM - 09:15 AM"}
            description={
              "Welcome Address	Event kickoff by Brand Stories representatives."
            }
          />
          <ScheduledItem
            time={"09:15 AM - 11:00 AM"}
            highlightText="Session 1"
            description={
              "Attitude & Leadership	Keynote by Mr. Shiv Khera: Building a ‘Can Do’ attitude and leadership."
            }
          />
          <ScheduledItem
            time={"11:00 AM - 11:15 AM"}
            description={"Tea Break	Refreshments and networking."}
          />
          <ScheduledItem
            time={"11:15 AM - 12:30 PM"}
            highlightText="Session 2"
            description={
              "Motivation & Ethics	Insights from Mr. Shiv Khera: Inspiring teams with ethics and values."
            }
          />
          <ScheduledItem
            time={"12:30 PM - 01:30 PM"}
            description={"Lunch Break	Delicious buffet lunch and networking."}
          />
          <ScheduledItem
            time={"01:30 PM - 02:30 PM"}
            description={
              "Brand Presentations	Three brands showcase their offerings (10 minutes each)."
            }
          />
          <ScheduledItem
            time={"02:30 PM - 03:30 PM"}
            highlightText="Session 3"
            description={
              "Creating High-Performance Teams	Workshop with Mr. Shiv Khera on team building and accountability."
            }
          />
          <ScheduledItem
            time={"03:30 PM - 03:45 PM"}
            description={"Tea Break	Refreshments and networking."}
          />
          <ScheduledItem
            time={"03:45 PM - 04:30 PM"}
            highlightText="Session 4"
            description={
              "The Winner’s Edge	Closing keynote by Mr. Shiv Khera: Doing things differently for success."
            }
          />
          <ScheduledItem
            time={"04:30 PM - 05:00 PM"}
            description={
              "Closing Remarks	Summary of the day and thank-you by Brand Stories representatives."
            }
          />
        </Stack>
      </Group>
    </Container>
  );
}
