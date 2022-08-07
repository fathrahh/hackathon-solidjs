import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function Card({ className, children }: Props) {
  return (
    <div
      className={`${className} rounded-md shadow-md shadow-slate-300 bg-white `}
    >
      {children}
    </div>
  );
}
