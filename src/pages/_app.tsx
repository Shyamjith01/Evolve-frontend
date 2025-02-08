import "@/styles/globals.css";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, MantineThemeOverride } from "@mantine/core";
import type { AppProps } from "next/app";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "rgba(255, 255, 255, 1)", // shade 0
      "#D9E2EC", // shade 1
      "rgba(27, 160, 217, 1)", // shade 2
      "rgba(124, 124, 124, 1)", // shade 3
      "rgba(111, 111, 111, 1)", // shade 4
      "rgba(255, 255, 255, 0.24)", // shade 5
      "rgba(238, 238, 238, 1)", // shade 6
      "rgba(79, 100, 109, 1)", // shade 7
      "rgba(0, 124, 177, 1)", // shade 8
      "#102A43", // shade 9
    ],
  },
  primaryColor: "brand", // Use "brand" as the primary color
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider  theme={theme}>
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
