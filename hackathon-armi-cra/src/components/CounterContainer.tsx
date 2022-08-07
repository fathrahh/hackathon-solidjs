import useCounterStore from "../store";

interface Props {
  title?: string;
}

export default function CounterContainer({ title }: Props) {
  const counter = useCounterStore((state) => state.counter);
  return (
    <div className="p-2 text-center min-w-[120px] aspect-square border-2 border-gray-400/20 shadow-md shadow-stone-400  rounded-md bg-white">
      <h3 className=" capitalize text-base font-bold text-purple-600 mb-5">
        {title}
      </h3>
      <span className="text-xl font-bold text-purple-700">{counter}</span>
    </div>
  );
}
