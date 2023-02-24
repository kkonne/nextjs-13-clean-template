import { Open_Sans } from "@next/font/google";
import styles from "./page.module.scss";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function Home() {
  return (
    <>
      <h1>Impressum page</h1>
    </>
  );
}
