import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="flex justify-between align-baseline pb-2 px-5 border-t-2  border-slate-100">
      <div className="text-xs align-baseline pt-2">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="align-baseline pt-2">
        <a href="https://github.com/oslabs-beta/react-visualizer">
          {/*github icon */}
          <Image
            src="/images/github-black.png"
            alt="chen"
            width={14}
            height={14}
            className="dark:invert"
          />
        </a>
      </div>
    </footer>
  );
}
