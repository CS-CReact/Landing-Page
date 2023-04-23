import '../styles/globals.css';
import Layout from '../components/layout';
import {Mulish} from '@next/font/google';

const mulish = Mulish({
  subsets:['latin'],
  variable: '--font-mulish',
})


export default function App({ Component, pageProps }) {
  return (
    <Layout className={`${mulish.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}
