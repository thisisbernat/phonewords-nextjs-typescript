import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Grid from "@kiwicom/orbit-components/lib/utils/Grid"
import Button from "@kiwicom/orbit-components/lib/Button"
import Text from "@kiwicom/orbit-components/lib/Text"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive"

const Home: NextPage = () => {
  const [display, setDisplay] = useState('')
  const [result, setResult] = useState([''])

  const writeToDisplay = (value: string) => {
    setDisplay(display + value)
  }

  const clearDisplay = () => {
    setDisplay('')
    setResult([''])
  }

  const backspace = () => {
    setDisplay(display.slice(0, -1))
  }

  useEffect(() => {
    const baseURL = window.location.href

    if (display.length) {
      axios.get(`${baseURL}api/phonewords/${display}`)
        .then(response => setResult(response.data))
    } else {
      setResult([''])
    }
  }, [display])

  return (
    <div className={styles.container}>
      <Head>
        <title>Phonewords</title>
        <meta name="description" content="Phonewords" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.screen}>
        This is a text
        <span className={styles.predicted}>
          {result.map((element, i) => element && <BadgePrimitive key={`pred-${i}`} background="darkBlue" foregroundColor="#fff">{element}</BadgePrimitive>)}
        </span>
      </div>
      <Grid
        rowGap="1rem"
        columnGap="1rem"
        columns="repeat(3, 1fr)"
      >
        <Button width={"4.5rem"} disabled={true}>1<br /><Text as="span" type="white" italic={true} size="small">_</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('2')}>2<br /><Text as="span" type="white" italic={true} size="small">ABC</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('3')}>3<br /><Text as="span" type="white" italic={true} size="small">DEF</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('4')}>4<br /><Text as="span" type="white" italic={true} size="small">GHI</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('5')}>5<br /><Text as="span" type="white" italic={true} size="small">JKL</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('6')}>6<br /><Text as="span" type="white" italic={true} size="small">MNO</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('7')}>7<br /><Text as="span" type="white" italic={true} size="small">PQRS</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('8')}>8<br /><Text as="span" type="white" italic={true} size="small">TUV</Text></Button>
        <Button width={"4.5rem"} onClick={() => writeToDisplay('9')}>9<br /><Text as="span" type="white" italic={true} size="small">WXYZ</Text></Button>
        <Button width={"4.5rem"} onClick={clearDisplay}>Clear</Button>
        <Button width={"4.5rem"} disabled={true}>0</Button>
        <Button width={"4.5rem"} onClick={backspace}><ChevronLeft /></Button>
      </Grid>
      <div className={styles.screen}>{display}</div>
    </div>
  )
}

export default Home
