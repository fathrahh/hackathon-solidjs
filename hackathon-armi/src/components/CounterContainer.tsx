import type { Component } from "solid-js";
import { counter } from "../store";

interface Props {
  title?: string;
}

const CounterContainer: Component<Props> = ({ title = "counter" }) => {
  return (
    <div class="p-2 text-center min-w-[120px] aspect-square border-2 border-gray-400/20 shadow-md shadow-stone-400  rounded-md bg-white">
      <h3 class=" capitalize text-base font-bold text-purple-600 mb-5">
        {title}
      </h3>
      <span class="text-xl font-bold text-purple-700">{counter()}</span>
    </div>
  );
};

export default CounterContainer;
