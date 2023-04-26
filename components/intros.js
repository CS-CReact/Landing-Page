import Image from 'next/image'

export default function intros(){
    return(
        <>
          <div className='flex flex-col gap-20 text-center  pt-20'>
            <div className='mt-2'>
                <div className='desktop:flex justify-center gap-5'>
                    <Image
                        src='/images/placeholder.gif'
                        alt='function intro of custom renderer'
                        width={300}
                        height={500}
                        className='shadow-md rounded-lg block mx-auto desktop:mx-1'
                    />
                    <div className='pt-10'>
                        <p className='text-2xl'>Custom Renderer</p>
                        <p>Custom renderer to capture rendering priorities</p>
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className='desktop:flex justify-center gap-5'>
                    <div className='pt-10 hidden desktop:block'>
                        <p className='text-2xl'>Custom Renderer</p>
                        <p>Custom renderer to capture rendering priorities</p>
                    </div>
                    <Image
                        src='/images/placeholder.gif'
                        alt='function intro of custom renderer'
                        width={300}
                        height={500}
                        className='shadow-md rounded-lg block mx-auto desktop:mx-1'
                    />
                    <div className='pt-10 desktop:hidden'>
                        <p className='text-2xl'>Custom Renderer</p>
                        <p>Custom renderer to capture rendering priorities</p>
                    </div>
                </div>
            </div>
          </div>
        </>
            
    )
}