import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-20 py-3 pt-10">
      <div className="flex-1">
        <Image
          priority
          src="/images/c-react.jpg"
          height={14}
          width={14}
          alt="logo"
        />
        <Link href="#homesection">C-React</Link>
      </div>
      <div className="flex-none">
        <ul className="flex space-x-8">
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
      <button className="rounded-full bg-dark">Dark Mode</button>
    </div>
  );
}
