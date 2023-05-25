import { FC, useCallback, useState } from 'react'

import hitokoto1Png from '@/assets/imgs/hitokoto_1.jpeg'
import hitokoto2Png from '@/assets/imgs/hitokoto_2.jpeg'
import hitokotoTemplatePng from '@/assets/imgs/hitokoto_template.jpeg'

import styles from './App.module.css'
import ImageArea from './ImageArea/ImageArea'

const hitokotoList = [hitokoto1Png, hitokoto2Png]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const onStartClick = useCallback(() => {
    console.log('onStartClick')
    setImageIndex(1)
    const id = window.setInterval(() => {
      const index = getRandomInt(hitokotoList.length)
      setImageIndex(index)
      const piAudio = new Audio('/pi.mp3')
      piAudio.play()
    }, 500)
  }, [])

  const [imageIndex, setImageIndex] = useState<number | null>(null)

  return (
    <div className={styles.root}>
      {imageIndex === null ? (
        <ImageArea src={hitokotoTemplatePng} />
      ) : (
        <ImageArea src={hitokotoList[imageIndex]} />
      )}
      <button className={styles.startButton} onClick={onStartClick}>
        Start!
      </button>
    </div>
  )
}

export default App
