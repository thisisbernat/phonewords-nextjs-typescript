import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import Head from 'next/head'
// import Image from 'next/image'

const baseURL = 'http://localhost:3001/api/phonewords/'

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
    if (display.length) {
      axios.get(`${baseURL}${display}`)
        .then(response => setResult(response.data))
    } else {
      setResult([''])
    }
  }, [display])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center", alignItems: "center", marginTop: "10rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem" }}>
        <button disabled style={{ padding: "0 1.5rem" }} ><h1>1</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('2')}><h1>2</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('3')}><h1>3</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('4')}><h1>4</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('5')}><h1>5</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('6')}><h1>6</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('7')}><h1>7</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('8')}><h1>8</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={() => writeToDisplay('9')}><h1>9</h1></button>
        <button disabled style={{ padding: "0 1.5rem" }} ><h1>0</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={backspace}><h1>←</h1></button>
        <button style={{ padding: "0 1.5rem" }} onClick={clearDisplay}><h1>Clear</h1></button>
      </div>
      <textarea readOnly value={display} style={{ width: "50%" }}></textarea>
      <div style={{ width: "50%" }}>
        <h3>Results:</h3>
        {result.map((element, index) => <div key={index}><span>{element}</span><br /></div>)}
      </div>
    </div>
  )
}

export default Home
