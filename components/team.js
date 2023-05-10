import Image from 'next/image';
import Link from 'next/link';
export default function team({TeamInfo}) {
  return (
    <div>
      <div className="">
        <div className="w-32">
          <Image
            src={TeamInfo.imageUrl}
            alt={TeamInfo.name}
            width={150}
            height={100}
            className="shadow-md rounded-lg"
          />
          <p className="pt-5">{TeamInfo.name}</p>
          <p className="text-xs py-5">{TeamInfo.intro}</p>
          <div className="flex justify-center">
            <Link href={TeamInfo.linkedin}>
              <Image
                src="/images/linkedin-blue.png"
                alt="martin_linkedin"
                width={14}
                height={14}
                className="shadow-md rounded-sm"
              />
            </Link>
            <Link href={TeamInfo.github}>
            <Image
              src="/images/github-black.png"
              alt="martin_github"
              width={14}
              height={14}
              className="shadow-md rounded-sm dark:invert"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
