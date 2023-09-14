import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function RectangularCheckboxIcon(props) {
  return (
    <>
      <div className={styles.featureSummaryText}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-px-24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#4ade80"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <path d="M9 12l2 2l4 -4"></path>
        </svg>
        {props.text}
      </div>
    </>
  );
}

const FeatureList = [
  {
    title: "What can I do with Evo?",
    description: (
      <>
        <div className={styles.featureSummaryContainer}>
          <RectangularCheckboxIcon text="Write multimedia apps and servers" />
          <RectangularCheckboxIcon text="Create self-contained executables" />
          <RectangularCheckboxIcon text="Interface with native (C/C++) libraries" />
          <RectangularCheckboxIcon text="High-performance asynchronous I/O" />
          <RectangularCheckboxIcon text="Use WebViews to run JavaScript from Lua" />
        </div>
        Evo functions as a substitute for the standard (PUC) Lua interpreter or
        - more accurately - LuaJIT. It runs your Lua scripts in an enriched
        environment, giving you access to powerful C and C++ libraries wrapped
        in easy-to-use APIs. This makes it possible to do lots of things that
        Lua can't usually do on its own. Of course there's still all of the Lua
        standard libraries and LuaJIT features, such as the FFI (foreign
        function interface) to easily call native libraries that aren't already
        built in. You can even run a fully-fledged browser engine and execute
        JavaScript (or load HTML and CSS) from within Lua - what a time to be
        alive!
      </>
    ),
  },
  {
    title: "How does Evo compare to other runtimes?",
    description: (
      <>
        <div className={styles.featureSummaryContainer}>
          <RectangularCheckboxIcon text="All-in-one standalone executable" />
          <RectangularCheckboxIcon text="Fully compatible with existing LuaJIT code" />
          <RectangularCheckboxIcon text="Supports Lua 5.1 and (partially) 5.2" />
          <RectangularCheckboxIcon text="Includes additional libraries and tools" />
          <RectangularCheckboxIcon text="Focus on testing and documentation" />
        </div>
        Evo may be seen as an extension of both the standard PUC-Lua interpreter
        and LuaJIT, in the sense that it's more or less "LuaJIT with extra
        libraries". This means it can do everything they can do, and more. Like
        LuaPower, LuaDist, or Luvit (which Evo is directly inspired by) it's
        intended as a "batteries included" runtime environment that's suitable
        for many real-world applications - though it aims to be easy to use and
        extend more than feature-complete. While the idea isn't new, a key
        difference is probably that Evo focuses on sustaining its ability to
        quickly evolve and meet new challenges head-on - hence the name.
      </>
    ),
  },
  {
    title: "What's the project status?",
    description: (
      <>
        <div className={styles.featureSummaryContainer}>
          <RectangularCheckboxIcon text="Functional but not feature-complete" />
          <RectangularCheckboxIcon text="Initial development started in 2021" />
          <RectangularCheckboxIcon text="Frequently updated (more or less)" />
          <RectangularCheckboxIcon text="Contributions are always welcome!" />
          <RectangularCheckboxIcon text="... but don't expect too much (yet)" />
        </div>
        Evo is in its larval stage of development, although it isn't completely
        new: The first prototypes were developed in 2021, eventually leading to
        the current design. Even if the concept has more than proven itself, the
        project is clearly far from being finished - and it likely never will,
        since evolution is in its DNA. Right now, Evo is like a caterpillar -
        which may yet turn into a butterfly. It hasn't had enough time to spin
        its cocoon and is still actively being worked on, so it'll be quite a
        while until all the planned features are in. If you'd like to take part
        in the journey, feel free to stick around! Contributions or feedback are
        welcome.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
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
