import { Box } from "@chakra-ui/react";
import styles from "../styles/ContentWrap.module.css";

interface IContentWrap {
  children: React.ReactNode;
}
export default function ContentWrap(props: IContentWrap) {
  const { children } = props;
  return <div className={styles.contentWrap}>{children}</div>;
}
