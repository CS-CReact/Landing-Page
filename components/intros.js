import Image from 'next/image';
import Link from 'next/link';

export default function intros() {
  return (
    <>
      <div className="flex flex-col gap-20 text-center  pt-20">
        <div className="mt-2">
          <div className="desktop:flex justify-center gap-5">
            <Image
              src="/images/renderer_lowframe.gif"
              alt="function intro of custom renderer"
              width={500}
              height={500}
              className="shadow-md rounded-lg block mx-auto desktop:mx-1"
            />
            <div className="pt-10 desktop:text-start">
              <p className="text-2xl desktop:text-start pl-10 font-bold">Custom Renderer</p>
              <p className="max-w-screen-sm p-10 m-auto text-sm desktop:text-start">
                Custom renderer built utilizing React Reconciler package which
                developers can install and use within their React applications.
                Our renderer works in conjunction with our Chrome Dev Tool to
                provide component updates on webpage to improve rendering
                strategies.
              </p>
              <Link href="chrome://extensions/" >
                <button className="rounded-full text-dark dark:bg-dark dark:text-white px-5 mx-5 text-sm tablet:text-base hover:text-black">
                    Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="desktop:flex justify-center gap-5">
            <div className="pt-10 hidden desktop:block w-76 text-end">
              <p className="text-2xl text-end pr-10 font-bold">Chrome Dev Tool</p>
              <p className="max-w-screen-sm p-10 m-auto text-sm text-end">
                React Developer Tool which displays a DOM component tree within
                Chrome Developer Panel that receives data sent from our custom
                renderer. Our Developer Tool dynamically updates and
                communicates with webpage to visualize component changes and
                also provides performance metrics of components to promote
                efficient load times.
              </p>
              <Link href="chrome://extensions/">
                <button className="rounded-full text-gray dark:bg-dark dark:text-white px-5 mx-5 text-sm tablet:text-base hover:text-black">
                    Learn More
                </button>
              </Link>
            </div>
            <Image
              src="/images/devtool_lowframe.gif"
              alt="function intro of custom renderer"
              width={500}
              height={500}
              className="shadow-md rounded-lg block mx-auto desktop:mx-1"
            />
            <div className="pt-10 desktop:hidden">
              <p className="text-2xl">Chrome Dev Tool</p>
              <p className="max-w-screen-sm p-10 m-auto w-76">
                React Developer Tool which displays a DOM component tree within
                Chrome Developer Panel that receives data sent from our custom
                renderer. Our Developer Tool dynamically updates and
                communicates with webpage to visualize component changes and
                also provides performance metrics of components to promote
                efficient load times.
              </p>
              <Link href="chrome://extensions/">
                <button className="rounded-full  text-gray dark:bg-dark dark:text-white px-5 mx-5 text-sm tablet:text-base hover:text-black">
                    Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
