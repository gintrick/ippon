import { FC, useCallback, useRef, useState } from 'react'

/* eslint-disable import/order */
// ここから                                ↓ここを made_by_makky か made_by_atsuo に変える
import hitokoto1Png from '@/assets/imgs/demo/hitokoto_1.jpeg'
import hitokoto2Png from '@/assets/imgs/demo/hitokoto_2.jpeg'
import hitokoto3Png from '@/assets/imgs/demo/hitokoto_3.jpeg'
import hitokoto4Png from '@/assets/imgs/demo/hitokoto_4.jpeg'
import hitokoto5Png from '@/assets/imgs/demo/hitokoto_5.jpeg'
import hitokoto6Png from '@/assets/imgs/demo/hitokoto_6.jpeg'
import hitokoto7Png from '@/assets/imgs/demo/hitokoto_7.jpeg'
import hitokoto8Png from '@/assets/imgs/demo/hitokoto_8.jpeg'
import hitokoto9Png from '@/assets/imgs/demo/hitokoto_9.jpeg'
import hitokoto10Png from '@/assets/imgs/demo/hitokoto_10.jpeg'
// ここまで
import hitokotoTemplatePng from '@/assets/imgs/hitokoto_template.jpeg'
/* eslint-enable import/order */
import { generateRandomList } from '@/utils'

import styles from './App.module.css'
import ImageArea from './ImageArea/ImageArea'

const hitokotoList = [
  hitokoto1Png,
  hitokoto2Png,
  hitokoto3Png,
  hitokoto4Png,
  hitokoto5Png,
  hitokoto6Png,
  hitokoto7Png,
  hitokoto8Png,
  hitokoto9Png,
  hitokoto10Png,
]

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
