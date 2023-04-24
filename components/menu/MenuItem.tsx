import { Button } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../styles/MenuItem.module.css";

interface IMenuItem {
  item: {
    url: string;
    label: string;
    slug: string;
  };
}

export default function MenuItem(props: IMenuItem) {
  const { item } = props;
  console.log("item", item.slug);
  return (
    <Link href={`/topic/${item.slug}`} key={item.slug}>
      <Button p={0} m={0} className={styles.button}>
        {item.label}
      </Button>
    </Link>
  );
}
