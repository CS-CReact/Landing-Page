import Image from 'next/image'

export default function intros(){
    return(
        <>
          <div className='flex flex-col gap-20 text-center  pt-20'>
            <div className='desktop:text-start mt-2'>
                <div className='desktop:flex justify-center gap-5'>
                    <Image
                        src='/images/placeholder.gif'
                        alt='function intro of custom renderer'
                        width={300}
                        height={500}
                        className='shadow-md rounded-lg'
                    />
                    <div className='pl-15 pt-10'>
                        <h5>Custom Renderer</h5>
                        <div className='w-11 shadow-md'></div>
                        <p>Custom renderer to capture rendering priorities</p>
                    </div>
                </div>
            </div>
            <div className='text-end mt-2'>
                <div className='flex justify-center gap-5'>
                    <div className='pr-15 pt-10'>
                        <p className='text-2xl'>Custom Renderer</p>
                        <div className='w-11 shadow-md'></div>
                        <p>Custom renderer to capture rendering priorities</p>
                    </div>
                    <Image
                        src='/images/placeholder.gif'
                        alt='function intro of custom renderer'
                        width={300}
                        height={500}
                        className='shadow-md rounded-lg'
                    />
                </div>
            </div>
          </div>
        </>
            
    )
}