import "../styles/globals.css";
import "../styles/longpole-adam.css";
import Layout from "../components/layout.js";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
