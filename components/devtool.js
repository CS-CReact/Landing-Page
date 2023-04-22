import Image from 'next/image';

export default function DevTools() {
  return (
    <>
      <div className='flex justify-center gap-5'>
        <div>
          <Image
            src='/images/placeholder3.png'
            alt='function intro of custom renderer'
            width={400}
            height={400}
            className='shadow-md rounded-lg'
          />

        </div>
        <div className='text-start pt-10'>
          <p>Chrome Devtool instructions</p>
          <a href="https://www.npmjs.com/package/creact-visualizer">
            Install C-React DevTool from the Chrome Web Store
          </a>
          <p>Open your React application, or any website</p>
          <p>Open Chrome Developer Tools and click on the C-React panel</p>
          <p>Watch the tree update dynamically as you navigate through your open page </p>
          
        </div>
      </div>
    </>
  );
}
