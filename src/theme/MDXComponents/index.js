import React from "react";
import MDXHead from "@theme/MDXComponents/Head";
import MDXCode from "@theme/MDXComponents/Code";
import MDXA from "@theme/MDXComponents/A";
import MDXPre from "@theme/MDXComponents/Pre";
import MDXDetails from "@theme/MDXComponents/Details";
import MDXHeading from "@theme/MDXComponents/Heading";
import MDXUl from "@theme/MDXComponents/Ul";
import MDXImg from "@theme/MDXComponents/Img";

import {
  Function,
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
  Description,
} from "@site/src/components/API/API";

import Admonition from "@theme/Admonition";
import Mermaid from "@theme/Mermaid";
const MDXComponents = {
  head: MDXHead,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  details: MDXDetails,
  ul: MDXUl,
  img: MDXImg,
  h1: (props) => <MDXHeading as="h1" {...props} />,
  h2: (props) => <MDXHeading as="h2" {...props} />,
  h3: (props) => <MDXHeading as="h3" {...props} />,
  h4: (props) => <MDXHeading as="h4" {...props} />,
  h5: (props) => <MDXHeading as="h5" {...props} />,
  h6: (props) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,

  // Extensions go here
  Function: Function,
  Parameters: Parameters,
  Parameter: Parameter,
  Returns: Returns,
  Return: Return,
  Struct: Struct,
  Member: Member,
  Dictionary: Dictionary,
  Keys: DictionaryKeys,
  Values: DictionaryValues,
  Experimental: Experimental,
  Stable: Stable,
  Deprecated: Deprecated,
  External: External,
  FFI: FFI,
  Placeholder: Placeholder,
  Blocking: Blocking,
  Description: Description,
};
export default MDXComponents;
