import Image from 'next/image';
import 'tailwindcss/tailwind.css';

export default function features() {
  return (
    <>
      <div className='text-center p-10 m-10'>
        <h3 className='text-2xl p-10 m-10'>Features</h3>
        <div className='flex flex-col text-center'>
            <Image src='/images/feature1.png' width='40' height='40'></Image>
            <p>Dynamic Rendering</p>
        </div>
      </div>
    </>
  );
}
