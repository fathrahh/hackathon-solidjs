import { Component, For } from "solid-js";
import Card from "./components/Card";
import Container from "./components/Container";
import CounterContainer from "./components/CounterContainer";
import { counter, setCounter, products } from "./store";
import { dollarCurrency } from "./utils/dollarCurrency";

const App: Component = () => {
  return (
    <div class="p-4 bg-cyan-200 w-full overflow-hidden">
      <div class="h-screen flex flex-col justify-center items-center ">
        <div class="flex gap-3 items-center">
          <CounterContainer title="counter 1" />
          <CounterContainer title="counter 2" />
        </div>
        <div class="mt-3">
          <button
            class="bg-orange-400 w-64 text-yellow-50 p-2 rounded-md"
            onClick={() => setCounter(counter() + 1)}
          >
            Increment Here
          </button>
        </div>
      </div>
      <Container maxWidth={1024} class="grid grid-cols-12 gap-3">
        <For each={products()}>
          {(product) => (
            <Card class="hover:scale-[103%] transition-all col-span-12 md:col-span-6 lg:col-span-3 p-8 ">
              <div class="w-full aspect-square mb-4">
                <img
                  class="object-contain object-center w-full h-full"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <h4 class="w-full font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {product.title}
              </h4>
              <p class="text-2xl my-2 font-bold text-green-500">
                {dollarCurrency(product.price)}
              </p>
              <span class="text-base font-bold">
                {product.rating?.rate} / 5⭐
              </span>
              <button class="w-full mt-4 text-white font-semibold hover:bg-sky-700 transition-all bg-sky-400 rounded-md py-2 shadow-md shadow-sky-900">
                Details
              </button>
            </Card>
          )}
        </For>
      </Container>
    </div>
  );
};

export default App;
