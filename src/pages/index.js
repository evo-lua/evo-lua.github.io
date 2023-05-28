import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

import LatestRelease from "../components/LatestRelease";

function AboutSection() {
  return (
    <div>
      <h1 className="hero__title">
        <img className="hero-banner-image" src="/img/caterpillar.png" />
      </h1>
      <p className="hero__subtitle">
        Evo is an experimental all-in-one Lua runtime
      </p>
      <p className="hero__description">
        It combines asynchronous I/O, just-in-time compilation, and browser
        technologies with many general-purpose libraries and other useful tools
        that can help you create complex Lua-based applications with ease.
      </p>
      <p className="hero__subscript">
        Disclaimer: This website is under construction! Both the documentation
        and Evo itself are a work in progress. You're welcome to look around,
        but don't expect too much - yet.
      </p>
    </div>
  );
}

function DownloadArea() {
  return (
    <div className="hero-buttons-container">
      <LatestRelease />
      <div>
        <Link
          className="hero-text"
          to="/docs/how-to-guides/building-from-source"
        >
          Build from Source
        </Link>
        <Link
          className="hero-text"
          to="https://github.com/evo-lua/evo-runtime/issues/new"
        >
          Report a Problem
        </Link>
        <Link className="hero-text" to="/docs/contributing">
          Contribute
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      id="hero-banner"
    >
      <div className="hero__container">
        <AboutSection />
        <DownloadArea />
      </div>
    </header>
  );
}

function QuickstartButton() {
  return (
    <div className="hero__container">
      <a
        className="hero-button hero__quickstart-button"
        href="/docs/category/getting-started/"
      >
        Get Started in Minutes
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title=""
      description="Lua runtime engine powered by LuaJIT and libuv"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickstartButton />
      </main>
    </Layout>
  );
}
