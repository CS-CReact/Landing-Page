import NpmCodeblock from '../components/NpmCodeblock.js';
import DevTools from '../components/devtool.js';

export default function demos(){
    return(
      <div>
        <div className='text-center mt-20'>
            <h3>Getting Started &rarr;</h3>
            <NpmCodeblock />
            <DevTools />
        </div>
      </div>
    )
}