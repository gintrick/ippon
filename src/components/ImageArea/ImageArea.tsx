import { FC } from 'react'

import styles from './ImageArea.module.css'

type Props = {
  src: string
}

const ImageArea: FC<Props> = ({ src }) => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={src} />
    </div>
  )
}

export default ImageArea
