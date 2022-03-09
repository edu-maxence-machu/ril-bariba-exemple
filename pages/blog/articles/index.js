import Link from "next/link";
import React from "react";
import Layout from "../../../layout/layout";
import Error from "next/error";

export default function Articles({ errorCode, articles }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout>
      La liste de mes articles
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <Link href={`/blog/articles/${article.attributes.slug}`}>
                <a>{article.attributes.Titre}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        articles {
          data {
            id
            attributes {
              Titre
              slug
            }
          }
        }
    }`,
    }),
  });

  let errorCode = res.statusText === "OK" ? false : res.status;

  const json = await res.json();

  let data = null;

  if (typeof json.data !== "undefined") {
    data = json.data.articles.data;
  }

  return {
    props: { errorCode, articles: data },
  };
}
