import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Placeholder Title",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        This documentation website is under construction. It's unfinished. A
        work in progress. Not final. Subject to change. Incomplete. The contents
        are a stand-in, a surrogate, a mere substitute for what is yet to come.
        The documentation itself is also wholly undeveloped. It is simply not
        ready. No matter how you put it, there's currently nothing on these
        pages that would be worth looking at. Nada. Nil. Do you have too much
        time? Why do you keep reading this silly and senseless paragraph? It
        purely exists to fill the blank space. Sometimes I really don't
        understand people on the internet.
      </>
    ),
  },
  {
    title: "Placeholder Title",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        This documentation website is under construction. It's unfinished. A
        work in progress. Not final. Subject to change. Incomplete. The contents
        are a stand-in, a surrogate, a mere substitute for what is yet to come.
        The documentation itself is also wholly undeveloped. It is simply not
        ready. No matter how you put it, there's currently nothing on these
        pages that would be worth looking at. Nada. Nil. Do you have too much
        time? Why do you keep reading this silly and senseless paragraph? Did
        you honestly think I would make up more than one of these? Well, I guess
        persistence must be rewarded.
      </>
    ),
  },
  {
    title: "Placeholder Title",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        This documentation website is under construction. It's unfinished. A
        work in progress. Not final. Subject to change. Incomplete. The contents
        are a stand-in, a surrogate, a mere substitute for what is yet to come.
        The documentation itself is also wholly undeveloped. It is simply not
        ready. No matter how you put it, there's currently nothing on these
        pages that would be worth looking at. Nada. Nil. Do you have too much
        time? Oh, by the way: Did you hear that a long time ago, in 1998, The
        Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through
        an announcer's table?
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
