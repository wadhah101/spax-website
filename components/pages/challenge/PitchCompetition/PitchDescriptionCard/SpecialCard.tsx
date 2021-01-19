import * as React from 'react'
import styles from './special.module.scss'

const SpecialCard: React.FunctionComponent = () => {
  return (
    <li className={styles.wrapper}>
      <h4> Smart digital layers </h4>
      <p>
        Smart digital infrastructure helps to increase understanding and the
        control of operations and optimize the use of limited resources in a
        city. One of the key value propositions of ICT in a smart city is the
        ability to capture and share information in a timely manner. One way to
        consider digital infrastructure is in the form of different supporting
        digital layers, as follows:
      </p>

      <h5 className={styles.sub}>(a) Urban:</h5>
      <p>
        The layer where physical and digital infrastructures meet. Examples
        include smart buildings, smart mobility, smart grids (for utilities such
        as water, electricity, and gas) and smart waste management systems.
      </p>

      <h5 className={styles.sub}>(b) Sensor:</h5>
      <p>
        his layer includes smart devices that measure and monitor different
        parameters of the city and its environment.
      </p>
      <h5 className={styles.sub}>(c) Connectivity:</h5>
      <p>
        This layer involves the transport of data and information from the
        sensor level to storage and to data aggregators for further analysis.
      </p>
      <h5 className={styles.sub}>(d) Data analytics:</h5>
      <p>
        This layer involves the analysis of data collected by different smart
        infrastructure systems, to help predict some events (such as traffic
        congestion).
      </p>
      <h5 className={styles.sub}>(e) Automation:</h5>
      <p>
        The digital enabling interface layer that enables automation and
        scalability for many devices across multiple domains and verticals.
      </p>
    </li>
  )
}

export default SpecialCard
