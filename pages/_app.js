import '../styles/globals.css';
import Layout from '../components/layout';
import {Mulish} from '@next/font/google';
import Head from 'next/head';

const mulish = Mulish({
  subsets:['latin'],
  variable: '--font-mulish',
  weight: ['variable']
})
export default function App({ Component, pageProps }) {
  return (
    <Layout className={`${mulish.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}
