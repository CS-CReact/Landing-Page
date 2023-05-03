import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { useTheme } from 'next-themes';

export default function Navbar() {
  //for dark mode
  const { theme, setTheme } = useTheme();
  return (
    <div className="px-1 mx-2 phone:px-5 md:mx-8 md:px-5 sm:px-7 pt-5 lg:mx-20">
      <div className="flex justify-between items-center">
        <button className="rounded-full text-dark dark:bg-dark text-sm dark:text-white phone:px-5 px-3 lg:mx-5">
          C-React
        </button>
        <div className="text-center pr-10">
          <ul className="sm:flex hidden sm:gap-1 md:gap-3 lg:gap-6 text-sm">
            <li>
              <Link href="#homesection">Home</Link>
            </li>
            <li>
              <Link href="#featuresection">Features</Link>
            </li>
            <li>
              <Link href="#demosection">Demo</Link>
            </li>
            <li>
              <Link href="#teamsection">Team</Link>
            </li>
            <li>
              <Link href="#contactsection">Contact</Link>
            </li>
          </ul>
        </div>
        <button
          className="rounded-full bg-dark text-white dark:bg-white text-xs dark:text-dark phone:px-5 px-3 py-0.5 lg:mx-5"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}
