import Head from 'next/head';
import styles from '../styles/layout.module.css';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Contact from '../components/contact.js';
import Demos from '../components/demos.js'
import Team from '../components/team.js';
import Features from '../components/features.js';
import Intros from '../components/intros.js'

const name = 'C-React';
const siteTitle = 'C-React';

export default function Home() {
  return (
    <>
      <Head>
        <title>C-React Home Page</title>
        <link rel="icon" href="/images/logo2.png" />
        <meta
          name="description"
          content="Landing page for C-React App that helps developers to visualize React"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div id="homesection" className='m-20 p-20 text-center'>
        <h1 className='text-5xl'>
          Custom renderer & visualizer for modern React
        </h1>
        <h2 className='text-1xl p-10 mb-10'>
          C-React is an open-source tool that marks and visualizes concurrent
          rendering patterns on web pages, differentiates between server-side
          rendered and client-side rendered components, and displays performance
          metrics.
        </h2>
        <button className="rounded-full bg-dark text-white dark:bg-white dark:text-dark px-5 mx-5">Npm Install</button>
        <button className="rounded-full text-dark dark:bg-dark dark:text-white px-5 mx-5">Google Dev Tool</button>
      </div>

      <div id="featuressection">
        <Features />
        <Intros />
      </div>
      <div id="demosection">
        <Demos />
      </div>
      <div id="teamsection">
        <Team />
      </div>
      <div id="contactsection">
        <Contact />
      </div>
    </>
  );
}
