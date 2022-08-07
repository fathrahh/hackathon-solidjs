interface Props<T> {
  each: readonly T[];
  children: (val: T, index?: number) => React.ReactNode;
}

export default function For<T>({ each, children }: Props<T>) {
  return <>{each.map(children)}</>;
}
