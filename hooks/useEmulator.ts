import { useState, useEffect } from 'react'
import { getWords } from '../services/api.services'

interface Emulator {
  message: string
  digits: string
  words: string[]
  isLoading: boolean
  updateDisplay: (digits: string | void) => void
  updateScreen: (newWord: string) => void
  clearData: () => void
  backspace: () => void
}

export const useEmulator = (): Emulator => {
  const [message, setMessage] = useState('')
  const [digits, setDigits] = useState('')
  const [words, setWords] = useState([''])
  const [isLoading, setIsLoading] = useState(false)

  const updateDisplay = (newDigit: string | void) => {
    if (newDigit) {
      setDigits(digits + newDigit)
    }
  }

  const updateScreen = (newWord: string) => {
    if (message === '') {
      setMessage(newWord)
    } else {
      setMessage(message + ' ' + newWord)
    }
    setDigits('')
  }

  const clearData = () => {
    setDigits('')
    setWords([''])
    setMessage('')
  }

  const backspace = () => {
    setDigits(digits.slice(0, -1))
    if (digits === '') {
      const splitted = message.split(' ')
      splitted.pop()
      setMessage(splitted.join(' '))
    }
  }

  useEffect(() => {
    const getData = async (digits: string) => {
      setIsLoading(true)
      try {
        const res = await getWords(digits)
        setWords(res.data)
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
    }

    if (digits.length) {
      getData(digits)
    } else {
      setWords([''])
    }
  }, [digits])

  return {
    message,
    digits,
    words,
    isLoading,
    updateDisplay,
    updateScreen,
    clearData,
    backspace
  }
}