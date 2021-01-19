import * as React from 'react'
import styles from './style.module.scss'
import { useAnalytics } from 'use-analytics'
import clsx from 'clsx'

const eniso = {
  name: 'IEEE ENISO Student Branch',
  href: 'https://eniso.ieee.tn/',
  image: '/commite/eniso.webp',
}

const insat = {
  name: 'IEEE INSAT Student Branch',
  href: 'https://insat.ieee.tn/',
  image: '/commite/insat.webp',
}

const commite = [insat, eniso]

const Committee: React.FunctionComponent = () => {
  const { track } = useAnalytics()

  return (
    <section className={clsx(styles.wrapper, styles.reduced)}>
      <div className={styles.container}>
        {/* commite */}
        <div>
          <p className={styles.subtitle}> BROUGHT TO YOU BY OUR </p>
          <h2 className={styles.baseTitle}> COMMITTEE </h2>
          <p className={styles.writing}>
            Led by 6 ambassadors from the initiative, ensuring the smooth
            running of the event&apos;s organization,{' '}
            <span className={styles.accent}>
              “Tunisia Entrepreneurship Summit: Industry innovation and
              Infrastructure (3I)”
            </span>{' '}
            is a two-day summit, hosted by two Tunisian IEEE Student Branches
            which are the ENISo’s Student Branch and the INSAT’s Student Branch
            .
          </p>
          <div className={clsx(styles.imageGrid, styles.gr)}>
            {commite.map((e, ind) => (
              <a
                rel="noreferrer"
                target="_blank"
                href={e.href}
                className={styles.el}
                key={ind}
                title={e.name}
                onClick={() => track(`${e.name} link click`)}
              >
                <div className={styles.imgFilltoCenter}>
                  <img alt={e.name} src={e.image} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Committee
