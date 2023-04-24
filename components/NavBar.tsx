import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { SiTypescript } from "react-icons/si";
import styles from "../styles/NavBar.module.css";
import NavDrawer from "./NavDrawer";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box className={styles.navBar}>
      <Flex width="200px" alignItems={"center"}>
        <Link href="/">
          <SiTypescript style={{ fontSize: "3rem" }} />
        </Link>{" "}
        <NavDrawer />
      </Flex>
      <Heading size="lg">TypeScript Reference App</Heading>
    </Box>
  );
}
