import Image from 'next/image';
import Link from 'next/link';
export default function team({ TeamInfo }) {
  return (
    <div>
      <div className="group relative">
        <p className="absolute text-sm p-5 hidden group-hover:block pt-5">
          {TeamInfo.intro}
        </p>
        <div className="w-48">
          <Image
            src={TeamInfo.imageUrl}
            alt={TeamInfo.name}
            width={300}
            height={300}
            className="shadow-md rounded-lg group-hover:opacity-10 text-center"
          />
          <div className="flex pt-5 items-center justify-between">
            <p className="pr-2 text-sm">{TeamInfo.name}</p>
            <div className="flex justify-center gap-1">
              <Link href={TeamInfo.linkedin}>
                <Image
                  src="/images/linkedin.png"
                  alt="martin_linkedin"
                  width={16}
                  height={16}
                  className="shadow-md rounded-sm dark:invert"
                />
              </Link>
              <Link href={TeamInfo.github}>
                <Image
                  src="/images/github-black.png"
                  alt="martin_github"
                  width={16}
                  height={16}
                  className="shadow-md rounded-sm dark:invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
