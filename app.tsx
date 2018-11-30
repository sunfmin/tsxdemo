import * as React from "preact";

import b from "./f2";

import m1 from "./m1";

import Header from "./header";

console.log(b());
console.log(m1(43));

function foo(a: number, b: string): string {
  return a + b;
}

var aa = 123;

aa = aa + 123;
function f() {
  return aa;
}

console.log(foo(1, "abc"));

function Page(props) {
  return (
    <Header name="felix">
      Hi {b()}, {m1(44)}
    </Header>
  );
}

React.render(<Page />, document.getElementById("root"));

export default f;
