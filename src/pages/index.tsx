import Head from 'next/head'
import { AboutSection, HeroSection, MediaPlayer } from '@/features'
import { CalendarSection } from '@/features/calendar-section'
import { ContactSection } from '@/features/contact-section'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  return (
    <>
      <Head>
        <title>Didgori</title>
        <meta name="description" content="Ensemble Didgori" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
      <CalendarSection />
      <ContactSection />
      <MediaPlayer />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale)
  return {
    props: {
      ...translations,
      // Will be passed to the page component as props
    },
  }
}
