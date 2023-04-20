import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Contact from "./contact";
import NpmCodeblock from "../components/NpmCodeblock.js";
import DevTools from "../components/DevTools.js";
import Features from "../components/Features.js";

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>
            Custom renderer & visualizer for modern React
          </h1>
          <h2 className={styles.h2}>
            C-React is an open-source tool that marks and visualizes concurrent
            rendering patterns on web pages, differentiates between server-side
            rendered and client-side rendered components, and displays
            performance metrics.
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Getting Started &rarr;</h3>
              <NpmCodeblock />
              <DevTools />
            </div>
            <div className={styles.card}>
              <h3>Features &rarr;</h3>
              <Features />
            </div>

            <div className={styles.card}>
              <h3>Demo &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>

            <div className={styles.card}>
              <h3>Meet the Team &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </div>
          </div>
          <br />
          {/* <p className={styles.description}>
            Questions? Comments? Contact us{" "}
            <Link Visit href="/contact">
              here!
            </Link> */}

          <Contact />
        </main>
      </div>
    </Layout>
  );
}
