import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useEmulator } from '../hooks/useEmulator'
import Head from 'next/head'
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive"
import Loading from "@kiwicom/orbit-components/lib/Loading"
import Keyboard from '../components/keyboard'

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
      <div className={styles.screen}>
        {message ? message : <div> </div>}
        <span className={styles.predictedDisplay}>
          {isLoading ? <BadgePrimitive background="#007F6D" foregroundColor="#fff"><Loading type="inlineLoader" /></BadgePrimitive> : words.map((word, i) => word && <div key={`pred-${i}`} onClick={() => updateScreen(word)} style={{ cursor: "pointer" }}><BadgePrimitive background="#007F6D" foregroundColor="#fff">{word}</BadgePrimitive></div>)}
        </span>
      </div>
      <div className={styles.digitsDisplay}>{digits}<span className={styles.blink}>_</span></div>
      <Keyboard updateDisplay={updateDisplay} clearData={clearData} backspace={backspace} />
    </div>
  )
}

export default Home
