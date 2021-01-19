import * as React from 'react'
import styles from './element.module.scss'

export interface IScheduleElement {
  title: string
  text: string
}

const TimelineElement: React.FunctionComponent<IScheduleElement> = ({
  title,
  text,
}) => {
  return (
    <li className={styles.container}>
      <h4> {title} </h4>
      <p> {text} </p>
    </li>
  )
}

export default TimelineElement
