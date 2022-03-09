import React from "react";
import Error from "next/error";

export default function Articleblog({ errorCode, data }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div>
      <h1>{data.attributes.Titre}</h1>
    </div>
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
        articles(filters: { slug: { eq: "${query.slug}" }}) {
          data {
            attributes {
              Contenu
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
    if (json.data.articles.data.length === 0) {
      errorCode = 404;
    } else {
      data = json.data.articles.data[0];
    }
  }

  return {
    props: { errorCode, data: data },
  };
}
