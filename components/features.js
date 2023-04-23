import Image from 'next/image';
import 'tailwindcss/tailwind.css';

export default function features() {
  return (
    <>
      <div className='text-center p-10 m-10'>
        <h3 className='text-2xl desktop:p-10 desktop:m-10 mb-10'>Features</h3>
        <div className='flex flex-wrap gap-10 justify-center'>
            <div className='flex flex-col items-center'>
                <Image src='/images/feature1.png' width='40' height='40' className='mb-5'></Image>
                <p className='w-40 text-sm align-middle'>Fiber Tree traversal with lane updates</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src='/images/feature1.png' width='40' height='40' className='mb-5'></Image>
                <p className='w-40 text-sm'>Visualize client-side React Component updates</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src='/images/feature1.png' width='40' height='40' className='mb-5'></Image>
                <p className='w-40 text-sm align-middle'>Hydration/SSR TBD</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src='/images/feature1.png' width='40' height='40' className='mb-5'></Image>
                <p className='w-40 text-sm'>Dynamic DOM tree visualizer via Chrome dev tool panel</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src='/images/feature1.png' width='40' height='40' className='mb-5'></Image>
                <p className='w-40 text-sm'>React application performance metrics</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src='/images/feature1.png' width='40' height='40' className='mb-5'></Image>
                <p className='w-40 text-sm'>Dynamic Rendering</p>
            </div>
        </div>
      </div>
    </>
  );
}
