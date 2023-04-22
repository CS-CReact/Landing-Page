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
      <div className='flex justify-center gap-5'>
        <div className='text-end pt-10'>
          <p>Npm install instructions</p>
          <a href="https://www.npmjs.com/package/creact-visualizer">
            Download NPM Package
          </a>
          <p>Install "creact-visualizer" via NPM</p>
          <p>Import cRender into your root file</p>
          
          <p>Render your root component using the cRender</p>
        </div>
        <div className="mockup-code text-start w-fit height-96" width={400} height={500}>
          <pre>
            <code className='text-xs'>{code}</code>
          </pre>
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="btn btn-active btn-ghost absolute text-xs top-0 right-0">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
}
