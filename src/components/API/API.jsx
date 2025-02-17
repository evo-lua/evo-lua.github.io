import React from "react";

import styles from "./styles.module.css";

export const Function = ({ since, children }) =>
  (since && (
    <>
      <span className={styles.sinceBlock}>Available since: {since}</span>
      <div className={styles.function}>{children}</div>
    </>
  )) || <></>;

class NilableInfo extends React.Component {
  render() {
    return <>?</>;
  }
}

class OptionalInfo extends React.Component {
  render() {
    return <>?</>;
  }
}

class Parameter extends React.Component {
  render() {
    let displayName = this.props.name;
    let displayType = this.props.type;

    if (this.props.varargs) {
      displayName = "...";
      displayType = (
        <a
          href="https://www.lua.org/pil/5.2.html"
          target="_blank"
          alt="Programming in Lua: Variable Arguments"
        >
          varargs
        </a>
      );
    }

    return (
      <tr>
        <td className={styles.tdCounter}>{this.props.index}</td>
        <td>{displayName}</td>
        <td>
          {displayType ? displayType : "any"}
          {this.props.optional ? <OptionalInfo /> : ""}
        </td>
        <td>{this.props.fallback ? this.props.fallback : ""}</td>
      </tr>
    );
  }
}

class Parameters extends React.Component {
  hasChildren() {
    return this.props.children !== undefined;
  }
  render() {
    return (
      <table
        className={[
          styles.functionParametersTable,
          this.hasChildren() ? "visible" : "hidden",
        ].join(" ")}
      >
        <tbody
          className={[
            styles.tdCounterReset,
            styles.functionParametersTableBody,
          ].join(" ")}
        >
          <tr className={styles.functionParametersFirstRow}>
            <th colSpan="4">Arguments</th>
          </tr>
          <tr className={styles.functionParametersHeadRow}>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Fallback</th>
          </tr>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

class Returns extends React.Component {
  render() {
    return (
      <table className={styles.functionReturnValuesTable}>
        <tbody
          className={[
            styles.tdCounterReset,
            styles.functionReturnValuesTableBody,
          ].join(" ")}
        >
          <tr className={styles.functionReturnValuesFirstRow}>
            <th colSpan="3">Return values</th>
          </tr>
          <tr className={styles.functionReturnValuesHeadRow}>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}
class Return extends React.Component {
  render() {
    let displayName = this.props.name;
    let displayType = this.props.type;

    if (this.props.varargs) {
      displayName = "...";
      displayType = (
        <a
          href="https://www.lua.org/pil/5.2.html"
          target="_blank"
          alt="Programming in Lua: Variable Arguments"
        >
          varargs
        </a>
      );
    }

    return (
      <tr>
        <td className={styles.tdCounter}>{this.props.index}</td>
        <td>{displayName}</td>
        <td>
          {displayType ? displayType : "any"}
          {this.props.optional ? <OptionalInfo /> : ""}
        </td>
      </tr>
    );

    return (
      <tr>
        <td className={styles.tdCounter}>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>
          {this.props.type ? this.props.type : "any"}
          {this.props.optional ? <NilableInfo /> : ""}
        </td>
      </tr>
    );
  }
}

class Struct extends React.Component {
  render() {
    return (
      <>
        <table className={styles.structMembersTable}>
          <tbody
            className={[
              styles.tdCounterReset,
              styles.structMembersTableBody,
            ].join(" ")}
          >
            <tr className={styles.structMembersFirstRow}>
              <th colSpan="3">{this.props.name}</th>
            </tr>
            <tr className={styles.structMembersHeadRow}>
              <th>Field</th>
              <th>Type</th>
            </tr>
            {this.props.children}
          </tbody>
        </table>
      </>
    );
  }
}

class Member extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          {this.props.type ? this.props.type : "any"}
          {this.props.optional ? <NilableInfo /> : ""}
        </td>
      </tr>
    );
  }
}

class Dictionary extends React.Component {
  render() {
    return (
      <>
        <table className={styles.dictionaryKeyValuesTable}>
          <tbody className={styles.dictionaryKeyValuesTableBody}>
            <tr className={styles.dictionaryKeyValuesFirstRow}>
              <th colSpan="4">{this.props.name}</th>
            </tr>
            <tr className={styles.dictionaryKeyValuesHeadRow}>
              <td colSpan="2" className={styles.dictionaryHeadRow}>
                Keys
              </td>
              <td colSpan="2" className={styles.dictionaryHeadRow}>
                Values
              </td>
            </tr>
            <tr className={styles.dictionaryKeyValuesHeadRow}>
              <th>Name</th>
              <th>Type</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
            <tr>{this.props.children}</tr>
          </tbody>
        </table>
      </>
    );
  }
}

class DictionaryKeys extends React.Component {
  render() {
    return (
      <>
        <td>{this.props.name}</td>
        <td>
          {this.props.type ? this.props.type : "any"}
          {this.props.optional ? <NilableInfo /> : ""}
        </td>
      </>
    );
  }
}

class DictionaryValues extends React.Component {
  render() {
    return (
      <>
        <td>{this.props.name}</td>
        <td>
          {this.props.type ? this.props.type : "any"}
          {this.props.optional ? <NilableInfo /> : ""}
        </td>
      </>
    );
  }
}

class Experimental extends React.Component {
  render() {
    return (
      <>
        <div className={styles.experimental}>
          Experimental: Functionality may change for any reason, without
          semantic versioning guarantees
        </div>
      </>
    );
  }
}

class Stable extends React.Component {
  render() {
    return (
      <>
        <div className={styles.stable}>
          Stable: Functionality is covered by semantic versioning guarantees and
          unlikely to see breaking changes
        </div>
      </>
    );
  }
}

class Deprecated extends React.Component {
  render() {
    return (
      <>
        <div className={styles.deprecated}>
          Deprecated: Functionality is maintained for backwards compatibility
          only, but covered by semantic versioning guarantees
        </div>
      </>
    );
  }
}

class External extends React.Component {
  render() {
    return (
      <>
        <div className={styles.external}>
          External: Functionality is provided by a third-party library, which
          may or may not give semantic versioning guarantees
        </div>
      </>
    );
  }
}

import Admonition from "@theme/Admonition";

class FFI extends React.Component {
  render() {
    return (
      <>
        <Admonition type="danger" title="Foreign Function Interface">
          This is a low-level module; misuse can easily crash the runtime!
        </Admonition>
      </>
    );
  }
}

class Placeholder extends React.Component {
  render() {
    return (
      <>
        <Admonition type="info">
          This section is a placeholder. If you know anything about the topic,
          please help fill it with content!
        </Admonition>
      </>
    );
  }
}

class Blocking extends React.Component {
  render() {
    return (
      <>
        <Admonition type="caution" title="Blocking API">
          This operation is synchronous; it will prevent the event loop from
          running while the request is being handled.
        </Admonition>
      </>
    );
  }
}

export {
  Parameters,
  Parameter,
  Returns,
  Return,
  Struct,
  Member,
  Dictionary,
  DictionaryKeys,
  DictionaryValues,
  Experimental,
  Stable,
  Deprecated,
  External,
  FFI,
  Placeholder,
  Blocking,
};
