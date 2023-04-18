import "tailwindcss/tailwind.css";
import "daisyui";

import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>CONTACT</h1>
      <br />
      <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs"
      />
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}
