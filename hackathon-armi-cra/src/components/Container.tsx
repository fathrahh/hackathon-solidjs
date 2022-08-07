import React from "react";

interface Props {
  center?: boolean;
  maxWidth: number | string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({
  center = true,
  maxWidth,
  style,
  className,
  children,
}: Props) {
  return (
    <div
      style={{
        maxWidth,
        marginInline: center ? "auto" : 0,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
