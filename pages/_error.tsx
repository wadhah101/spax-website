import { NextPage } from 'next'
import React from 'react'
import BasePage from '../components/shared/BasePage'
import styles from '../components/shared/basePage.module.scss'
import BannerWithImage from '../components/template/BannerWithImage'

const image = '/fire.webp'

const Error: NextPage = () => {
  return (
    <BasePage>
      <BannerWithImage imageUrl={image}>
        <div style={{ zIndex: 5 }} className={styles.baseContainer}>
          <h1 className={styles.baseTitle}>
            server error. <br />
            something very bad happened.
          </h1>
        </div>
      </BannerWithImage>
    </BasePage>
  )
}

export default Error
