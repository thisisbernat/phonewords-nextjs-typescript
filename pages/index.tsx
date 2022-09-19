import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useEmulator } from '../hooks/useEmulator'
import Head from 'next/head'
import Keyboard from '../components/Keyboard'
import PhoneScreen from '../components/PhoneScreen'
import DigitsDisplay from '../components/DigitsDisplay'
import SocialLinks from '../components/SocialLinks'


const Home: NextPage = () => {

  const {
    message,
    digits,
    words,
    isLoading,
    updateDisplay,
    updateScreen,
    clearData,
    backspace
  } = useEmulator()

  return (
    <div className={styles.container}>
      <Head>
        <title>T9 Emulator 🥝</title>
        <meta name="description" content="Phonewords" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhoneScreen message={message} isLoading={isLoading} words={words} updateScreen={updateScreen} />
      <DigitsDisplay digits={digits} />
      <Keyboard updateDisplay={updateDisplay} clearData={clearData} backspace={backspace} />
      <SocialLinks />
    </div>
  )
}

export default Home
