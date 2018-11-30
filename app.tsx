import * as React from "preact";

import b from "./f2";

console.log(b());

function foo(a: number, b: string): string {
  return a + b;
}

var aa = 123;

aa = aa + 123;
function f() {
  return aa;
}

console.log(foo(1, "abc"));

function Header(props) {
  return <h1 name={props.name}>{props.children}</h1>;
}

function Page(props) {
  return <Header name="felix">Hi {b()}</Header>;
}

React.render(<Page />, document.getElementById("root"));

export default f;
