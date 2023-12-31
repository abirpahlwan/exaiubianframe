import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ImageUpload from "../components/ImageUpload";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ex-AIUBian Meetup Frame</title>
        <meta name="description" content="Generated by abirpahlwan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <main className={styles.main}>
        {/*<div className={styles.description}>*/}
          <div>
            <ImageUpload />
          </div>
          {/*<div>*/}
          {/*  <a href="https://www.exaiubian.com/" target="_blank" rel="noopener noreferrer" ><Image src="/logo.jpg" alt="Ex-AIUBian" className={styles.vercelLogo} width={100} height={24} priority/> </a>*/}
          {/*</div>*/}
        {/*</div>*/}
      </main>
    </>
  )
}
