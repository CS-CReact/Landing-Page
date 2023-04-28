import Image from 'next/image';
export default function team() {
  return (
     
    <div>
      <div className=''>
      <div className='w-32'>
        <Image
            src='/images/placeholder2.jpg'
            alt='chen'
            width={150}
            height={100}
            className='shadow-md rounded-lg'
        />
        <p className='text-sm'>Write something cool about yourself</p>
        <div className='flex justify-center'>
            <Image
                src='/images/linkedin-blue.png'
                alt='chen'
                width={14}
                height={14}
                className='shadow-md rounded-sm'
            />
            <Image
                src='/images/github-black.png'
                alt='chen'
                width={14}
                height={14}
                className='shadow-md rounded-sm dark:invert'
            />
        </div>
        </div>

      </div>
      </div>  
  );
}
