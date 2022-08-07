import { Component } from "solid-js";
import { counter } from "../store";

const Header: Component = () => {
  return <header>counter from header {counter()}</header>;
};

export default Header;
