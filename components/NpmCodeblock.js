import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function NpmCodeblock() {
  const code = `
  import React from 'react';
  import App from './App';
  import cRender from 'creact-visualizer';
  const root = document.getElementById('root');

  cRender(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    , root
  );`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <div className="desktop:flex desktop:justify-center gap-5">
        <div className="desktop:text-start pt-10 desktop:pr-20 pb-10">
          <p className="text-2xl pb-10">Npm install instructions</p>
          <a
            href="https://www.npmjs.com/package/creact-visualizer"
            className="text-grey dark:text-green"
          >
            Download NPM Package
          </a>
          <p className="pt-5">Install "creact-visualizer" via NPM</p>
          <p>Import cRender into your root file</p>

          <p>Render your root component using the cRender</p>
        </div>
        <div className="content-center ">
          <div className="mockup-code phone:w-80 tablet:w-[550px] mx-auto w-76 block bg-dark height-3/5 dark:border-2 dark:border-light-grey ">
            <pre className="text-start">
              <code className="text-xs">{code}</code>
            </pre>
            <CopyToClipboard text={code} onCopy={handleCopy}>
              <button className="btn btn-active btn-ghost absolute text-xs top-0 right-0">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
}
