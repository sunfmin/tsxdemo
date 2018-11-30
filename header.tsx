import * as React from "preact";

function Header(props) {
  return <h1 name={props.name}>{props.children}</h1>;
}

export default Header;
