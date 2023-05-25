/**
 * 同じ数字が連続でこない乱数を返す
 */
export function generateRandomList(n: number, m: number): number[] {
  const randomList: number[] = []
  let previousNumber: number | null = null

  for (let i = 0; i < m; i++) {
    let randomNumber: number

    do {
      randomNumber = Math.floor(Math.random() * n)
    } while (randomNumber === previousNumber)

    randomList.push(randomNumber)
    previousNumber = randomNumber
  }

  return randomList
}
