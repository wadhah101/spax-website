import * as React from 'react'
import BannerWithImage from '../template/BannerWithImage'
import styles from '../shared/basePage.module.scss'

const image = '/lost.webp'

const NotFoundComp: React.FunctionComponent = () => {
  return (
    <BannerWithImage imageUrl={image}>
      <div style={{ zIndex: 5 }} className={styles.baseContainer}>
        <h1 className={styles.baseTitle}>
          <span className={styles.bigger}> 404 </span>
          <br />
          are you lost <br /> BABY GIRL ?
        </h1>
      </div>
    </BannerWithImage>
  )
}

export default NotFoundComp
