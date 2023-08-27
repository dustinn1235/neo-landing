import Head from "next/head";
import App from "./components/App";

export default function Home() {
  <Head>
    <link rel="preload" href="logo.svg" as="image" />
    <link rel="preload" href="cover.jpg" as="image" />
  </Head>;

  return (
    <main>
      <App />
    </main>
  );
}
