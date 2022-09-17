import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useEmulator } from '../hooks/useEmulator'
import Head from 'next/head'
import Keyboard from '../components/keyboard'
import Screen from '../components/Screen'

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
      <Screen message={message} isLoading={isLoading} words={words} updateScreen={updateScreen} />
      <div className={styles.digitsDisplay}>{digits}<span className={styles.blink}>_</span></div>
      <Keyboard updateDisplay={updateDisplay} clearData={clearData} backspace={backspace} />
    </div>
  )
}

export default Home
