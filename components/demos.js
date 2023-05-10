import NpmCodeblock from '../components/NpmCodeblock.js';
import DevTools from '../components/devtool.js';

export default function demos() {
  return (
    <div>
      <div className="text-center mt-20 desktop:p-10">
        <h2 className="text-2xl desktop:p-10 desktop:m-10 mb-10 font-bold">
          Getting Started
        </h2>
        <div className="desktop:p-10 desktop:m-10">
          <NpmCodeblock />
        </div>
        <div className="mb-5">
          <DevTools />
        </div>
      </div>
    </div>
  );
}
