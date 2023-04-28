import '../styles/globals.css';
import Layout from '../components/layout';
import {Mulish} from '@next/font/google';
import { ThemeProvider } from 'next-themes'

const mulish = Mulish({
  subsets:['latin'],
  variable: '--font-mulish',
})


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" > 
      <Layout className={`${mulish.variable} font-sans`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>

  );
}
