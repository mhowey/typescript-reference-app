import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Heading } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TypeScript Reference App</title>
        <meta
          name="description"
          content="TypeScript reference app by Howey Design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading variant="h2">TypeScript Reference App</Heading>
      </main>
    </>
  );
}
