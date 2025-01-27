import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/icons/EvolveLogo.png";
import secondaryLogo from "../../../public/Images/controlLogo.png";

import Link from "next/link";

const mockdata = [
  {
    icon: "",
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: "",
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: "",
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: "",
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: "",
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: "",
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const matches = useMediaQuery("(max-width: 640px)");

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        themeicon
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const Links = () => (
    <>
      <Link href="#" className={classes.link}>
        <Text fz={16} fw={600} c={"white"}>
          HOME
        </Text>
      </Link>
      <Link href="#" className={classes.link}>
        <Text tt={"uppercase"} fz={16} fw={600} c={"white"}>
          ABOUT
        </Text>
      </Link>
      <Link href="#" className={classes.link}>
        <Text tt={"uppercase"} fz={16} fw={600} c={"white"}>
          SPEAKERS
        </Text>
      </Link>
      <Link href="#" className={classes.link}>
        <Text tt={"uppercase"} fz={16} fw={600} c={"white"}>
          Itinerary
        </Text>
      </Link>
      <Link href="#" className={classes.link}>
        <Text tt={"uppercase"} fz={16} fw={600} c={"white"}>
          Gallery
        </Text>
      </Link>
      <Link href="#" className={classes.link}>
        <Text tt={"uppercase"} fz={16} fw={600} c={"white"}>
          Contact Us
        </Text>
      </Link>
      <Link href="#" className={classes.link}>
        <Text tt={"uppercase"} fz={16} fw={600} c={"white"}>
          Tickets
        </Text>
      </Link>
    </>
  );

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group
          display={"flex"}
          align="center"
          justify="space-between"
          pt={10}
          h="100%"
        >
          <Group mt={20}>
            <Image width={matches ? 100 : 130} src={logo} alt="logo" />
          </Group>
          <Group  mt={15} h="100%" gap={0} visibleFrom="sm">
            <Links />
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Group mt={20}>
            <Image width={matches ? 100 : 130} src={logo} alt="logo" />
          </Group>
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Links />

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
