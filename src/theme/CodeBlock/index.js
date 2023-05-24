import React, { isValidElement } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import ElementContent from "@theme/CodeBlock/Content/Element";
import StringContent from "@theme/CodeBlock/Content/String";
/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */
function maybeStringifyChildren(children) {
  if (React.Children.toArray(children).some((el) => isValidElement(el))) {
    return children;
  }
  // The children is now guaranteed to be one/more plain strings
  return Array.isArray(children) ? children.join("") : children;
}

// This is only needed to automatically check for dead links (when building the docs)
const GITHUB_BASE_URL =
  "https://github.com/evo-lua/evo-luvi/blob/main/Tests/Examples/";

export default function CodeBlock({ children: rawChildren, ...props }) {
  // The Prism theme on SSR is always the default theme but the site theme can
  // be in a different mode. React hydration doesn't update DOM styles that come
  // from SSR. Hence force a re-render after mounting to apply the current
  // relevant styles.
  const isBrowser = useIsBrowser();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp =
    typeof children === "string" ? StringContent : ElementContent;

  // This should be added to the final HTML page's DOM, so that the link checker script can pick it up
  const snippetSourceURL = GITHUB_BASE_URL + props.source;
  const optionalSourceLink = props.source ? (
    <>
      <a className="optional-snippet-source" href={snippetSourceURL}>
        {snippetSourceURL}
      </a>
    </>
  ) : (
    ""
  );

  return (
    <>
      <CodeBlockComp key={String(isBrowser)} {...props}>
        {children}
      </CodeBlockComp>
      {optionalSourceLink}
    </>
  );
}
