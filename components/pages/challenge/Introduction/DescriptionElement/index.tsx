import * as React from 'react'
import styles from './style.module.scss'
interface IElementProps {
  title: string
  text: string
}

const DescriptionElement: React.FunctionComponent<IElementProps> = ({ title, text }) => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.writing}> {text} </p>
    </div>
  )
}

export default DescriptionElement
