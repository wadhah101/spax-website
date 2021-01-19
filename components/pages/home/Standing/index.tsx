import * as React from 'react'
import { placeholder } from '../../../../pages/_app'
import styles from './standing.module.scss'

const arr = [
  { name: 'innovation', text: placeholder, image: '/home/innov.webp' },
  { name: 'industry', text: placeholder, image: '/home/industry.webp' },
  { name: 'infrastructure', text: placeholder, image: '/home/infra.webp' },
]

const Standing: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {arr.map(({ name, text, image }) => (
          <div
            className={styles.el}
            style={{ background: `url(${image}) center center no-repeat ` }}
            key={name}
          >
            <div className={styles.writing}>
              <h3> {name} </h3>
              <p> {text} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Standing
