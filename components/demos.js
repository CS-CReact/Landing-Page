import NpmCodeblock from '../components/NpmCodeblock.js';
import DevTools from '../components/devtool.js';

export default function demos(){
    return(
      <div>
        <div className='text-center mt-20 p-10'>
            <h2>Getting Started</h2>
            <div className="p-10 m-10" >
                <NpmCodeblock />
            </div>
            <div className='mb-5'>
                <DevTools />
            </div>
        </div>
      </div>
    )
}