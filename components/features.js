import Image from 'next/image';
import 'tailwindcss/tailwind.css';

export default function features() {
  return (
    <>
      <div className="text-center p-10 m-10">
        <h3 className="text-2xl desktop:p-10 desktop:m-10 mb-10">Features</h3>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/lanes.png"
              width="40"
              height="40"
              className="mb-5"
            ></Image>
            <p className="w-40 text-sm align-middle">
              Lane Updates
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/comp.png"
              width="40"
              height="40"
              className="mb-5"
            ></Image>
            <p className="w-40 text-sm">
              Component Updates
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/chrome.png"
              width="40"
              height="40"
              className="mb-5"
            ></Image>
            <p className="w-40 text-sm align-middle">Chrome Dev Tool</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/renderer.png"
              width="40"
              height="40"
              className="mb-5"
            ></Image>
            <p className="w-40 text-sm">
            Custom Renderer

            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/metrics.png"
              width="40"
              height="40"
              className="mb-5"
            ></Image>
            <p className="w-40 text-sm">
              Performance Metrics
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/hydration.png"
              width="40"
              height="40"
              className="mb-5"
            ></Image>
            <p className="w-40 text-sm">Hydration (Coming)</p>
          </div>
        </div>
      </div>
    </>
  );
}
