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
    setMessage(message + ' ' + newWord)
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
    if (digits.length) {
      setIsLoading(true)
      getWords(digits)
        .then(res => setWords(res.data))
    } else {
      setWords([''])
    }
    setIsLoading(false)
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