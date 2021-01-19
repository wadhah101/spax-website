import clsx from 'clsx'
import * as React from 'react'
import FactsVideo from '../Video'
import styles from './style.module.scss'
import { useAnalytics } from 'use-analytics'

const FactsBanner: React.FunctionComponent = () => {
  const { track } = useAnalytics()

  return (
    <section
      className={clsx(
        styles['p-header'],
        ' md:grid place-items-center flex-grow'
      )}
    >
      <div className={styles.baseContainer}>
        <div
          className={clsx(
            'grid items-center gap-x-6 gap-y-4',
            styles['grid-colums-1-2-3']
          )}
        >
          <div onClick={() => track('region 8 vid')}>
            <FactsVideo />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              A special word from the R8 Entrepreneurship Committe Co-founder
            </h1>
            <p>
              Mohamed El Dallal is a Computer and Communication Engineer, MBA
              holder specialized in International Business. He is also working
              on researches in the digital marketing field. He is a serial
              Entrepreneur currently the Co-founder and CEO of Innovideas LLC
              for a marketing and advertising agency, Co-founder of Dcodes LLC
              for software solutions, and Co-founder and board member of Techne
              Summit. Mohamed is also an avid volunteer, participating with
              several NGOs, project, and youth initiatives both inside and
              outside of Egypt since 2009. He has been a volunteer in IEEE since
              2010 serving in a different position locally and regionally, He is
              the former Vice-Chair of IEEE Young Professionals MGA, the
              co-founder and team leader of the IEEE REGION 8 ENTREPRENEURSHIP
              INITIATIVE.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FactsBanner
