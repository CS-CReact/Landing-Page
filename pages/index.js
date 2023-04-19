import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Contact from "./contact";
import NpmCodeblock from "../components/NpmCodeblock.js";
import DevTools from "../components/DevTools.js";

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
              {/* <a className={styles.link} href="https://nextjs.org/docs">
                <p style={{ marginTop: "3rem" }}>Install Chrome Dev Tool</p>
              </a> */}
              <DevTools />
            </div>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Features &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Demo &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Meet the Team &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
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
