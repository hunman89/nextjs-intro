import Layout from "../conponents/Layout";
import "../styles/globals.css";

export default function App({ Component, PageProps }) {
  return (
    <>
      <Layout>
        <Component {...PageProps} />
      </Layout>
    </>
  );
}
