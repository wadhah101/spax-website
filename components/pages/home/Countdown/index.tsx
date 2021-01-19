import React, { useEffect, useState } from 'react'
import CountdownElement from './Element'
import duration from 'dayjs/plugin/duration'
import dayjs, { Dayjs } from 'dayjs'
import styles from './countdown.module.scss'
const dataDay = (value: number, text: string) => ({ value, text })

const arr = [
  dataDay(0, 'weeks'),
  dataDay(0, 'days'),
  dataDay(0, 'hours'),
  dataDay(0, 'min'),
  dataDay(0, 'sec'),
]

const dateDiffFactory = (current: Dayjs, event: Dayjs) => {
  const diff = dayjs.duration(event.diff(current))
  return [
    dataDay(diff.weeks(), 'weeks'),
    dataDay(diff.days() % 7, 'days'),
    dataDay(diff.hours(), 'hours'),
    dataDay(diff.minutes(), 'min'),
    dataDay(diff.seconds(), 'sec'),
  ].map((e) => ({ ...e, value: Math.max(0, e.value) }))
}

const Countdown: React.FunctionComponent = () => {
  const [data, setdata] = useState(arr)

  useEffect(() => {
    dayjs.extend(duration)
    const event = dayjs('2020-11-21T16:00:00.000Z')
    const interval = setInterval(() => {
      const newArr = dateDiffFactory(dayjs(), event)
      setdata(newArr)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.elementGrid}>
        {data.map(({ value, text }) => (
          <CountdownElement key={text} value={value} text={text} />
        ))}
      </div>
    </div>
  )
}

export default Countdown
