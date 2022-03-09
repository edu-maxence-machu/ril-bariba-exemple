import Link from "next/link";
import React from "react";

export default function Articles() {
  return (
    <div>
      La liste de mes articles
      <Link href="/blog/articles/obiwan">
        <a>Article sur la série Obiwan</a>
      </Link>
      @
    </div>
  );
}
