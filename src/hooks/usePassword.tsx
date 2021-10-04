import { useState, useCallback } from 'react'
import _words from 'utils/_words'

const usePassword = (length = 4) => {
  const [wordsSelect, setWordsSelect] = useState('')
  const [numbersSelect, setNumbersSelect] = useState('')
  const randomNumber = (length = 4) => {
    const numbers = '0123456789'
    let result = ''

    for (let index = 0; index < length; index++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }

    return result
  }

  const randomWords = (length = 4, wordsList = _words) => {
    const words = []
    let wordsCopy = wordsList

    for (let index = 0; index < length; index++) {
      const word =
        wordsCopy[Math.floor(Math.random() * wordsCopy.length)].toLowerCase()

      wordsCopy = wordsCopy.filter((w) => w !== word)

      words.push(word)
    }

    return words
  }

  const selectWords = (length = 4) => {
    const words = [...randomWords(length), ...randomWords(length)]
    return randomWords(length, words)
  }

  const words = selectWords(length).join('-')
  const number = randomNumber(length)

  const generatePassword = useCallback(() => {
    setWordsSelect(words)
    setNumbersSelect(number)
  }, [words, number])

  return { words: wordsSelect, numbers: numbersSelect, generatePassword }
}

export default usePassword
