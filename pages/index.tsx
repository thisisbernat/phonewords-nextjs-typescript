import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useEmulator } from '../hooks/useEmulator'
import Head from 'next/head'
import Grid from "@kiwicom/orbit-components/lib/utils/Grid"
import Button from "@kiwicom/orbit-components/lib/Button"
import Text from "@kiwicom/orbit-components/lib/Text"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive"
import Loading from "@kiwicom/orbit-components/lib/Loading"

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
          {isLoading ? <BadgePrimitive background="#007F6D" foregroundColor="#fff"><Loading type="inlineLoader"/></BadgePrimitive> : words.map((word, i) => word && <div key={`pred-${i}`} onClick={() => updateScreen(word)} style={{ cursor: "pointer" }}><BadgePrimitive background="#007F6D" foregroundColor="#fff">{word}</BadgePrimitive></div>)}
        </span>
      </div>
      <div className={styles.digitsDisplay}>{digits}<span className={styles.blink}>_</span></div>
      <Grid
        rowGap="1rem"
        columnGap="1rem"
        columns="repeat(3, 1fr)"
      >
        <Button width={"4.5rem"} disabled={true}>1<br /><Text as="span" type="white" italic={true}>_</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('2')}>2<br /><Text as="span" type="white" italic={true}>abc</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('3')}>3<br /><Text as="span" type="white" italic={true}>def</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('4')}>4<br /><Text as="span" type="white" italic={true}>ghi</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('5')}>5<br /><Text as="span" type="white" italic={true}>jkl</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('6')}>6<br /><Text as="span" type="white" italic={true}>mno</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('7')}>7<br /><Text as="span" type="white" italic={true}>pqrs</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('8')}>8<br /><Text as="span" type="white" italic={true}>tuv</Text></Button>
        <Button width={"4.5rem"} onClick={() => updateDisplay('9')}>9<br /><Text as="span" type="white" italic={true}>wxyz</Text></Button>
        <Button width={"4.5rem"} onClick={clearData}>Clear</Button>
        <Button width={"4.5rem"} disabled={true}>0</Button>
        <Button width={"4.5rem"} onClick={backspace}><ChevronLeft /></Button>
      </Grid>
    </div>
  )
}

export default Home
