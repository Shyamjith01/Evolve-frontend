// pages/fail.js
import { useEffect, useState } from "react";
import { Container, Title, Text, Center, Alert, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { IconAlertSquareRounded } from "@tabler/icons-react";

export default function Fail() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Retrieve the error message from the query parameters
    const query = new URLSearchParams(window.location.search);
    const error = query.get("error");
    setErrorMessage(error || "An unknown error occurred.");
  }, []);

  return (
    <Container>
      <Center style={{ height: "100vh", flexDirection: "column" }}>
        <IconAlertSquareRounded size={70} color="rgb(250, 82, 82)" />
        <Title order={1} mt={-2} c="red">
          Booking Failed
        </Title>
        <Text mt="sm" c="dimmed">
          {errorMessage} Please try again or contact support.
        </Text>
        <Text mt="1px" c="dimmed">
          Please try again or contact support.
        </Text>
        <Button
          onClick={() => router.push("/")}
          radius={"50px"}
          bg={"blue"}
          mt="15px"
        >
          <Text mt={-4} fw={600}>
            Back to Home
          </Text>
        </Button>
      </Center>
    </Container>
  );
}
