import { Container, Flex, Stack, Text } from "@mantine/core";
import jainamImg from "../../../public/Images/sponsers/jainam.png"
import aliceBlueImg from "../../../public/Images/sponsers/aliceblue.png"
import acumenImg from "../../../public/Images/sponsers/acumen.png"
import tradeJiniImg from "../../../public/Images/sponsers/tradejini.png"
import Image from "next/image";


export default function SponseredSection() {
    return(
        <Container size={1200} w={"100%"}>
            <Stack gap={40} my={{md:30,base:90}}>
                <Text fz={35} fw={700} c="brand.2">
                    Co Sponsered by
                </Text>
                <Flex mb={50} wrap={"wrap"} gap={50} align={"center"}>
                    <Image src={jainamImg} alt="jainamImg" />
                    <Image src={aliceBlueImg} alt="jainamImg" />
                    <Image src={acumenImg} alt="jainamImg" />
                    <Image src={tradeJiniImg} alt="jainamImg" />
                </Flex>
            </Stack>
        </Container>
    )
}