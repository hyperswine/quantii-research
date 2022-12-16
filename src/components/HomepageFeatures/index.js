import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Quantii from "/static/img/Quantii.png"

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="column">
          <img src={Quantii} />
          Quantii, a step towards the future.
        </div>
        <div>
          Articles:
        </div>
      </div>
    </section>
  )
}
