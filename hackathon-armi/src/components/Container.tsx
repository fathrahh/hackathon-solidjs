import type { Component, JSX, JSXElement } from "solid-js";

interface Props {
  center?: boolean;
  maxWidth: number;
  children: JSXElement;
  class?: string;
  style?: JSX.CSSProperties;
}

const Container: Component<Props> = ({
  center = true,
  maxWidth,
  style,
  class: className,
  children,
}: Props) => {
  return (
    <div
      style={{
        "max-width": `${maxWidth}px`,
        "margin-inline": center ? "auto" : 0,
        ...style,
      }}
      class={className}
    >
      {children}
    </div>
  );
};

export default Container;
