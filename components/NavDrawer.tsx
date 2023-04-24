import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import styles from "../styles/NavDrawer.module.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import NavMenu from "./NavMenu";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button className={styles.openButton} colorScheme="teal" onClick={onOpen}>
        <AiOutlineMenuUnfold /> Menu
      </Button>
      <Drawer
        // className={styles.drawer}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#4C815A">
          <DrawerCloseButton />
          <DrawerHeader>Navigation Menu</DrawerHeader>

          <DrawerBody onClick={onClose}>
            <NavMenu isOpen />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
