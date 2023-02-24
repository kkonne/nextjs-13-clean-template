"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import SampleLogo from "public/assets/images/sample-logo.svg";
import { useWindowDimensions } from "@/@hooks/window-height";

export default function Home() {
  const { height } = useWindowDimensions();
  return (
    <main
      className={styles.main}
      style={{
        minHeight: `${height}px`,
      }}
    >
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            Get started by editing src/app/page.tsx
          </code>
        </p>
        <div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            By
            <Image
              src={SampleLogo}
              alt="Sample Logo"
              className={styles.brandLogo}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://globalsoft.ba/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Hi from @kkonne! 👋🏼</h2>
          <p>This is made by Josip Leko for future references</p>
        </a>
      </div>
    </main>
  );
}
