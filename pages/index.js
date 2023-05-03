import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Contact from '../components/contact.js';
import Demos from '../components/demos.js';
import Team from '../components/team.js';
import Features from '../components/features.js';
import Intros from '../components/intros.js';

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

      <div
        id="homesection"
        className="mt-20 phone:mt-20 phone:pt-5 phone:mx-5 tablet:m-20 tablet:pt-20 desktop:m-20 desktop:p-20 text-center"
      >
        <h1 className="text-2xl phone:text-3xl tablet:text-4xl desktop:text-5xl mx-2">
          Custom renderer & visualizer for modern React
        </h1>
        <h2 className="text-sm phone:text-base tablet:text-lg desktop:text-1xl py-10 px-5 tablet:px-10 mb-10 text-grey dark:text-lightgreen">
          C-React is an open-source tool that marks and visualizes concurrent
          rendering patterns on web pages, differentiates between server-side
          rendered and client-side rendered components, and displays performance
          metrics.
        </h2>
        <button className="rounded-full bg-dark text-white dark:bg-white dark:text-dark px-5 mx-5 text-sm tablet:text-base">
          Npm Install
        </button>
        <button className="rounded-full text-dark dark:bg-dark dark:text-white px-5 mx-5 text-sm tablet:text-base">
          Google Dev Tool
        </button>
      </div>
      <div id="featuresection">
        <Features />
        <Intros />
      </div>
      <div id="demosection">
        <Demos />
      </div>
      <div id="teamsection" className="text-center p-20">
        <h3 className="text-2xl desktop:p-10 desktop:m-10 mb-10">
          Meet the Team
        </h3>
        <div className="flex flex-wrap justify-center p-10 m-10 gap-24">
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
        </div>
      </div>
      <div id="contactsection">
        <Contact />
      </div>
    </>
  );
}
