import Head from "next/head";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Contact from "../components/contact.js";
import NpmCodeblock from "../components/NpmCodeblock.js";
import DevTools from "../components/devtool.js";
import Team from "../components/team.js";
import Features from "../components/features.js";


const name = "C-React";
const siteTitle = "C-React";

export default function Home() {
  return (
    <>
      <Head>
        <title>C-React Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Landing page for C-React App that helps developers to visualize React"
        />
        <meta property="og:image" content="..public/images/c-react.jpg"/>
        <meta name="og:title" content={siteTitle} />
      </Head>
        <div id="homesection">
          <h1 className={styles.title}>
            Custom renderer & visualizer for modern React
          </h1>
          <h2 className={styles.h2}>
            C-React is an open-source tool that marks and visualizes concurrent
            rendering patterns on web pages, differentiates between server-side
            rendered and client-side rendered components, and displays
            performance metrics.
          </h2>
        </div>
        <div className={styles.card}>
          <h3>Getting Started &rarr;</h3>
          <NpmCodeblock />
          <DevTools />
        </div>
        <div id="featuressection">
          <Features />
        </div>
        
        <div id="demosection">
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Demo &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
        <div id="teamsection">
          <Team/>
        </div>
        <div id="contactsection">
          <Contact />
        </div>
    </>
  );
}
