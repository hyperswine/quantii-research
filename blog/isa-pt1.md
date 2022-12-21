---
date: 2022-12-18
name: Jasen Qin
title: "Instruction Set Architecture from First Principles: Part 1"
url: https://github.com/hyperswine
email: jasen.qin33@gmail.com
---

Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.

## ISA: Spectre

The spectre ISA is designed for minimalist, functional computing. How do we verify that an ISA is enlightened? Well it should be:

- Well represented. That means probably turing complete or total turing complete
- Encourage directness and low overhead. A language that compiles to it would essentially look the same or similar to what one would expect
- Encourage expressiveness. No point in a language that that a billion instructions just to do something small. Should be proportional in a logical human centric manner

Now we need to reduce our ISA to a quantisable form we can analyse naturally and rigorously. Probably denotational mathematics or type equations.

Proof.

We want our ISA to have an index >= 1. Assume SpectreISA < 1.
Instruction Reduction > 0.5, as it is well represented.
Directness > 0.5 as it is minimal.
Hence SpectreISA is well defined.

---

<h2 style={{textAlign: "center"}}>Discuss</h2>

<giscus-widget repo="hyperswine/projects"
        repoid="R_kgDOIZg-sQ"
        category="Announcements"
        categoryid="DIC_kwDOIZg-sc4CSmin"
        mapping="pathname"
        strict="0"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
        crossorigin="anonymous">
</giscus-widget>
