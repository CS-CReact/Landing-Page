import Navbar from './navbar';
import Footer from './footer';
import 'tailwindcss/tailwind.css';

export default function Layout({ children }) {
  return (
    <>
      <div className='background-animate bg-gradient-to-br from-emerald-50 via-white to-emerald-50 via-white to-emerald-50 sto-transparent'>
        <Navbar />
        <main >{children}</main>
        <Footer />
      </div>
    </>
  );
}
