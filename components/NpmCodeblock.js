import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../styles/Home.module.css";

export default function NpmCodeblock() {
  const code = `import React from 'react';
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
      <a
        className={styles.link}
        href="https://www.npmjs.com/package/creact-visualizer"
      >
        <p>Download NPM Package</p>
      </a>
      Install creact-visualizer via NPM
      <br />
      Import cRender into your root file
      <br />
      Render your root component using the cRender
      <div style={{ marginTop: "3rem" }} className="mockup-code">
        <pre>
          <code>{code}</code>
        </pre>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="btn btn-active btn-ghost absolute top-0 right-0">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
}
