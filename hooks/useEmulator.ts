import { useState, useEffect } from 'react'
import { getWords } from '../services/api.services'

export const useEmulator = () => {
  const [message, setMessage] = useState('')
  const [digits, setDigits] = useState('')
  const [result, setResult] = useState([''])

  const updateDisplay = (newDigit: string) => {
    setDigits(digits + newDigit)
  }

  const updateScreen = (newWord: string) => {
    setMessage(message + ' ' + newWord)
    setDigits('')
  }

  const clearData = () => {
    setDigits('')
    setResult([''])
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
      getWords(digits)
        .then(res => setResult(res.data))
    } else {
      setResult([''])
    }
  }, [digits])

  return {
    message,
    digits,
    result,
    updateDisplay,
    updateScreen,
    clearData,
    backspace
  }
}