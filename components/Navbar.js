import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Navbar() {
  return (
    <div className="navbar px-20 py-3 pt-10">
      <div className="flex-1">
        <Link href="#homesection">C-React</Link>
      </div>
      <div className="flex-none">
        <ul className="flex space-x-6">
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
      <button className="rounded-full bg-dark text-white dark:bg-white text-sm dark:text-dark px-5 mx-5">Dark Mode</button>
    </div>
  );
}
