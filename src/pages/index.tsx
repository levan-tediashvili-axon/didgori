import Head from 'next/head'
import { AboutSection, HeroSection, MediaPlayer } from '@/features'

export default function Home() {
  return (
    <>
      <Head>
        <title>Didgori</title>
        <meta name="description" content="ანსამბლი დიდგორი" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
      <MediaPlayer />
    </>
  )
}
