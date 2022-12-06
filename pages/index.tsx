import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nextjs in vercel with yarn berry. Check{' '}
          <a href="https://github.com/keidarcy/next-yarn-berry">code!</a>
        </h1>

        <ul className={styles.description}>
          <li className={styles.title}>
            <Link href="/">HOME(Static)</Link>
          </li>
          <li className={styles.title}>
            <Link href="/sg">SG PAGE</Link>
          </li>
          <li className={styles.title}>
            <Link href="/ssr">SSR PAGE</Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
