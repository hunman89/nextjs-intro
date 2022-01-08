import NavBar from "../conponents/NevBar";
import "../styles/globals.css";

export default function App({ Component, PageProps }) {
  return (
    <>
      <NavBar />
      <Component {...PageProps} />
    </>
  );
}
