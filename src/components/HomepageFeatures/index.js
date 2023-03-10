import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Quantii from "/static/img/Quantii.png"
import QuantiiResearch from "/static/img/Quantii-Research.png"
import InfoCard from "./card"

const FeaturedArticlesList = [
  // {
  //   title: <a href="../docs/base/kernels-and-utility">Kernels</a>,
  //   Img: null,
  //   description: <>Kernels: Utility and Foundation</>,
  // },
  {
    title: <a href="../blog/isa-pt1-">ISA Pt. 1</a>,
    Img: null,
    description: <>[Blog] Instruction Set Architecture from First Principles: Part 1</>,
  },
  {
    title: <a href="../blog/performance-post">Performance</a>,
    Img: null,
    description: <>[Blog] Performance: Part 1</>,
  },
  {
    title: <a href="../docs/base/dynamic-design-theory">Dynamic Design Theory</a>,
    Img: null,
    description: <>Theory of Dynamic Design</>,
  },
]

function FeaturedArticle({ Img, title, description, main_link }) {
  return (
    <div className={clsx("col col--4")} style={{ borderStyle: "solid" }}>
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
    <div>
      <h2 className="text--center" style={{ marginTop: "2rem" }}>Featured Articles</h2>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeaturedArticlesList.map((props, idx) => (<FeaturedArticle key={idx} {...props} />))}
          </div>
        </div>
      </section>
      <hr />
      <div className="column" style={{ padding: '1rem', display: "flex", justifyContent: "center" }}>
        <img src={Quantii} />
        <text style={{ alignSelf: "center" }}>Quantii, a step toward the future.</text>
      </div>
    </div>
  )
}
