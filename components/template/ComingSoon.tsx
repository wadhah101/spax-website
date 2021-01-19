import * as React from 'react'
import BannerWithImage from './BannerWithImage'
import styles from './comingSoon.module.scss'

const imageUrl = '/hourglass.webp'

const ComingSoon: React.FunctionComponent = () => {
  return (
    <BannerWithImage imageUrl={imageUrl}>
      <h1 style={{ zIndex: 3, textAlign: 'center' }} className={styles.bigger}>
        COMING <br /> SOON
      </h1>
    </BannerWithImage>
  )
}

export default ComingSoon
