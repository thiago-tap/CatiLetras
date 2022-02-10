import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'

export const removeDiacritics = (word: string): string => {
  return word
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export const isWordInWordList = (wordx: string) => {
  const palavra = WORDS.find(
    (word) => removeDiacritics(word) === removeDiacritics(wordx)
  )
  const arrPalavra = []
  arrPalavra.push(palavra)

  return (
    WORDS.includes(arrPalavra.toString()) ||
    VALID_GUESSES.includes(arrPalavra.toString())
  )
}

export const isWinningWord = (wordx: string) => {
  const palavra = WORDS.find(
    (word) => removeDiacritics(word) === removeDiacritics(wordx)
  )
  const arrPalavra = []
  arrPalavra.push(palavra)

  return solution === arrPalavra.toString().toUpperCase()
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[index % WORDS.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
