import React from "react";
import Image from "next/image";
import golderCard from "../../../public/icons/golderCard.png";
import silverCard from "../../../public/icons/silverCard.png";
import styles from "./ResponsiveGrid.module.css";
import { Flex, Grid, Text } from "@mantine/core";

const ResponsiveGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.card}>
        <Grid w="100%" p={0}>
          <Grid.Col span={4} p={0} pt={4} pos={"relative"}>
            <Flex
              align={"center"}
              w="100%"
              direction={"column"}
              justify={"center"}
              gap={1}
              pos={"absolute"}
              style={{ top: "52% ", transform: "translateY(-50%)" }}
            >
              <Text
                lh={{md:"23px",base:"18px"}}
                tt={"uppercase"}
                ta={"center"}
                fz={{ md: "18px", sm: "15px", xs: "17px" }}
                fw={600}
                c={"#000000"}
              >
                Standard <br />
                Ticket
              </Text>
              <Text
                mt={-4}
                tt={"uppercase"}
                ta={"center"}
                fz={{ md: "35px", sm: "25px", xs: "20px" }}
                fw={700}
                c={"#000000"}
              >
                ₹6,000
              </Text>
            </Flex>
            <Image
              src={golderCard} 
              style={{ objectFit: "contain", height: "100%" ,width:"100%"}}
              alt="golderCard"
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <Flex h={"100%"} align={"center"}>
              <Text
                tt={"uppercase"}
                ta={"start"}
                fz={{md:"16px",base:"14px"}}
                fw={600}
                w={"95%"}
                c={"#000000"}
                ml={{md:15,base:2}}
              >
                General admission to all sessions and networking.
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </div>

      <div className={styles.card}>
        <Grid w="100%" p={0}>
          <Grid.Col span={4} p={0} pt={4} pos={"relative"}>
            <Flex
              align={"center"}
              w="100%"
              direction={"column"}
              justify={"center"}
              gap={1}
              pos={"absolute"}
              style={{ top: "52% ", transform: "translateY(-50%)" }}
            >
              <Text
                lh={{md:"23px",base:"18px"}}
                tt={"uppercase"}
                ta={"center"}
                fz={{ md: "18px", sm: "14px", xs: "20px" }}
                fw={600}
                c={"#000000"}
              >
                Early Bird <br />
                Ticket
              </Text>
              <Text
                mt={-4}
                tt={"uppercase"}
                ta={"center"}
                fz={{ md: "35px", sm: "25px", xs: "20px" }}
                fw={700}
                c={"#000000"}
              >
                ₹5,000
              </Text>
            </Flex>
            <Image
              src={silverCard}
              style={{ objectFit: "contain", height: "100%",width:"100%" }}
              alt="golderCard"
            />
          </Grid.Col>
          <Grid.Col span={8}>
            <Flex h={"100%"} align={"center"}>
              <Text
                tt={"uppercase"}
                ta={"start"}
                fz={{md:"16px",base:"14px"}}
                fw={600}
                w={"95%"}
                c={"#000000"}
                ml={{md:15,base:2}}
              >
                Available until 31st March 2025. Don’t miss the chance to save!
              </Text>
            </Flex>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
