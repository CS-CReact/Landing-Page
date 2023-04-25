import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';


export default function Navbar() {
  return (
    <div className="sm:mx-5 phone:px-5  md:mx-8 md:px-5 px-10 pt-5 lg:mx-20">
      <div className="flex justify-between items-center">
        <button className="rounded-full text-dark dark:bg-dark text-sm dark:text-white px-5 lg:mx-5">C-React</button>
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
        <button className="rounded-full bg-dark text-white dark:bg-white text-xs dark:text-dark px-5 py-0.5 lg:mx-5">Dark Mode</button>
      </div>
    </div>
  );
}
