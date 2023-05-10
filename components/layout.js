import Navbar from './Navbar';
import Footer from './Footer';
import 'tailwindcss/tailwind.css';
import { Mulish } from '@next/font/google';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

export default function Layout({ children }) {
  return (
    <>
      <div className={mulish.className}>
        <div className="background-animate overflow-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
