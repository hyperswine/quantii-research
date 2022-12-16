import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Quantii from "/static/img/Quantii.png"

const FeatureList = [
  {
    title: <a href="../docs/base/spectre-system">Spectre System</a>,
    Img: Spectre,
    description: <>Spectre is a computing system</>,
  },
]

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
        <div className="row">
          <img src={Quantii} />
          Quantii Research.
        </div>
      </div>
    </section>
  )
}
