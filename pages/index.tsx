import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/pages/home/Banner'
import Description from '../components/pages/home/Description'
import Timeline from '../components/pages/home/Timeline'
import Speakers from '../components/pages/home/Speakers'
import Partners from '../components/pages/home/Partner'
// import Standing from '../components/pages/home/Standing'
import WhyUs from '../components/pages/home/WhyUs'
import BasePage from '../components/shared/BasePage'
import Trailer from '../components/pages/home/Trailer'
import { appContext } from './_app'
import Committee from '../components/pages/home/Committee'

export const Home: NextPage = () => {
  const { videoOpen } = React.useContext(appContext)

  return (
    <BasePage>
      {videoOpen && <Trailer />}
      <Banner />
      <Description />
      <Committee />
      <WhyUs />
      <Speakers />
      <Timeline />
      <Partners />
    </BasePage>
  )
}

export default Home
