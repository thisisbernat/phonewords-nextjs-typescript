import englishWords from 'an-array-of-english-words'

const map: { [key: string]: string } =
{
  '0': '',
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

export const t9 = (digits: string) => {
  if (digits.length === 0) return []

  const result: string[] = []

  const walk = (current: string, i: number) => {
    if (i > digits.length - 1) {
      result.push(current)
      return
    }

    const characters: keyof typeof map = map[digits[i]]
    for (const char of characters) {
      walk(current + char, i + 1)
    }
  }

  if (digits.length > 0) {
    walk('', 0)
  }

  return result.filter(word => englishWords.includes(word))
  
}