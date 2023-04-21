import Link from 'next/link';
import 'tailwindcss/tailwind.css';


export default function Navbar() {
  return (
    <div className="px-10 py-3 pt-5 mx-20">
      <div className="flex justify-between items-center">
        <Link href="#homesection">C-React</Link>
        <div className="text-center">
          <ul className="flex space-x-10 text-sm">
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
        <button className="rounded-full bg-dark text-white dark:bg-white text-xs dark:text-dark px-5 py-0.5 mx-5">Dark Mode</button>
      </div>
    </div>
  );
}
