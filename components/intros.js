import Image from 'next/image';

export default function intros() {
  return (
    <>
      <div className="flex flex-col gap-20 text-center  pt-20">
        <div className="mt-2">
          <div className="desktop:flex justify-center gap-5">
            <Image
              src="/images/placeholder.gif"
              alt="function intro of custom renderer"
              width={300}
              height={500}
              className="shadow-md rounded-lg block mx-auto desktop:mx-1"
            />
            <div className="pt-10">
              <p className="text-2xl text-start pl-10">Custom Renderer</p>
              <p className='max-w-screen-sm p-10 m-auto text-start'>Custom renderer built utilizing React Reconciler package which developers can install and use within their React applications. Our renderer works in conjunction with our Chrome Dev Tool to provide component updates on webpage to improve rendering strategies.</p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="desktop:flex justify-center gap-5">
            <div className="pt-10 hidden desktop:block">
              <p className="text-2xl text-end pr-10">Chrome Dev Tool</p>
              <p className='max-w-screen-sm p-10 m-auto text-end'>React Developer Tool which displays a DOM component tree within Chrome Developer Panel that receives data sent from our custom renderer. Our Developer Tool dynamically updates and communicates with webpage to visualize component changes and also provides performance metrics of components to promote efficient load times.</p>
            </div>
            <Image
              src="/images/placeholder.gif"
              alt="function intro of custom renderer"
              width={300}
              height={500}
              className="shadow-md rounded-lg block mx-auto desktop:mx-1"
            />
            <div className="pt-10 desktop:hidden">
              <p className="text-2xl">Chrome Dev Tool</p>
              <p className='max-w-screen-sm p-10 m-auto'>React Developer Tool which displays a DOM component tree within Chrome Developer Panel that receives data sent from our custom renderer. Our Developer Tool dynamically updates and communicates with webpage to visualize component changes and also provides performance metrics of components to promote efficient load times.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
