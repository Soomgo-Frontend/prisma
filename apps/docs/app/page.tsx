import Image from "next/image";
import styles from "./page.module.css";
import { Button, RedButton } from "@repo/component";
import "@repo/component/style.css";
import "@repo/foundation/global.css";
import { TextColor } from "@repo/foundation";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Button />
       <RedButton />
       <div style={{ color: TextColor.teal }}>Hello</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  );
}
