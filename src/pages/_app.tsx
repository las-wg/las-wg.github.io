import "@/styles/globals.css";
//import "../CelestialSaaS/css/index.css";  /* Import custom styles */
//import "../CelestialSaaS/css/tailwind.css"; /* Import Tailwind’s directives */
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
