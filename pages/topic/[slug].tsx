import Head from "next/head";
import { useRouter } from "next/router";
import { mockContent } from "@root/content/mockContent";

export interface ITopic {
  title: string;
  content: string;
  slug: string;
}

export default function ViewTopic() {
  //   const { topic } = props;
  //   console.log("TOPIC:: ", topic);
  console.log("mockContent", mockContent);
  const slug = useRouter().query.slug;
  const article: ITopic | undefined = mockContent.find((article: any) => {
    // return;
    return article.slug === slug;
  });
  console.log("router", slug);
  return (
    <>
      <h1>{article!.title}</h1>
      <p>{article!.content}</p>
    </>
  );
}
