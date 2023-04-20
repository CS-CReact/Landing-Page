import styles from "../styles/Home.module.css";

export default function DevTools() {
  return (
    <>
      <a
        className={styles.link}
        href="https://www.npmjs.com/package/creact-visualizer"
      >
        <p style={{ marginTop: "3rem" }} c>
          Install C-React DevTool from the Chrome Web Store
        </p>
      </a>
      Open your React application, or any website
      <br />
      Open Chrome Developer Tools and click on the C-React panel
      <br />
      Watch the tree update dynamically as you navigate through your web page
    </>
  );
}
