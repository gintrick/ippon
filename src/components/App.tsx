import { FC, useCallback, useRef, useState } from 'react'

import hitokoto1Png from '@/assets/imgs/hitokoto_1.jpeg'
import hitokoto2Png from '@/assets/imgs/hitokoto_2.jpeg'
import hitokoto3Png from '@/assets/imgs/hitokoto_3.jpeg'
import hitokoto4Png from '@/assets/imgs/hitokoto_4.jpeg'
import hitokotoTemplatePng from '@/assets/imgs/hitokoto_template.jpeg'
import { generateRandomList } from '@/utils'

import styles from './App.module.css'
import ImageArea from './ImageArea/ImageArea'

const hitokotoList = [hitokoto1Png, hitokoto2Png, hitokoto3Png, hitokoto4Png]

const endAudio = new Audio('/end.mp3')

const intervalNumbers = [
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 600, 800, 1100, 1300,
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const goNext = useCallback((randomIndices: number[], index: number) => {
    console.log('index:', index)
    if (index >= intervalNumbers.length) return
    setTimeout(() => {
      setImageIndex(randomIndices[index])
      if (index === intervalNumbers.length - 1) {
        endAudio.play()
        setIsButtonActive(true)
      } else {
        const piAudio = new Audio('/pi.mp3')
        piAudio.play()
      }
      goNext(randomIndices, index + 1)
    }, intervalNumbers[index])
  }, [])

  const onStartClick = useCallback(() => {
    setIsButtonActive(false)
    const randomIndices = generateRandomList(hitokotoList.length, intervalNumbers.length)
    console.log('randomIndices:', randomIndices)
    goNext(randomIndices, 0)
  }, [goNext])

  const [imageIndex, setImageIndex] = useState<number | null>(null)
  const [isButtonActive, setIsButtonActive] = useState(true)

  return (
    <div className={styles.root}>
      {imageIndex === null ? (
        <ImageArea src={hitokotoTemplatePng} />
      ) : (
        <ImageArea src={hitokotoList[imageIndex]} />
      )}
      <button className={styles.startButton} onClick={onStartClick} disabled={!isButtonActive}>
        Start!
      </button>
    </div>
  )
}

export default App
