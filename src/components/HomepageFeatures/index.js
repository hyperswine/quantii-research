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
    <div style={{ borderStyle: "solid", marginRight: "1rem", display: "flex" }}>
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

      <div className="container" style={{ padding: '1rem', display: "flex", flexDirection: "column", alignItems: "centre" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className="text--center">Featured Articles</h2>
          <div style={{ display: "flex", flexDirection: "row", margin: "2rem", justifyContent: "space-around" }}>
            {FeaturedArticlesList.map((props, idx) => (<FeaturedArticle key={idx} {...props} />))}
          </div>
        </div>
        <hr />
        <div className="column" style={{ padding: '1rem', display: "flex", justifyContent: "center", marginBottom: "5rem" }}>
          <img src={Quantii} style={{ marginRight: '2rem' }} />
          <text style={{ alignSelf: "center" }}>Quantii, a step toward the future.</text>
        </div>
      </div>
    </section>
  )
}
