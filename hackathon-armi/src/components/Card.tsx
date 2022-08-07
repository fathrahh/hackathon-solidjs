import { Component, JSXElement, ParentComponent } from "solid-js";

interface Card {
  class?: string;
  children: JSXElement;
}

const Card: Component<Card> = ({ class: className, children }) => {
  return (
    <div class={`${className} rounded-md shadow-md shadow-slate-300 bg-white `}>
      {children}
    </div>
  );
};

export default Card;
