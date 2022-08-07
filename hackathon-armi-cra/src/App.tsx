import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import CounterContainer from "./components/CounterContainer";
import For from "./components/For";
import useCounterStore from "./store";
import { dollarCurrency } from "./utils/currency";

export type productProp = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function App() {
  const [products, setProducts] = useState<productProp[]>();
  const setCounter = useCounterStore(({ setCounter }) => setCounter);

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = (await response.json()) as productProp[];
      setProducts(json);
    };
    fetcher();
  }, []);

  return (
    <div className="p-4 bg-cyan-200 w-full overflow-hidden">
      <div className="h-screen flex flex-col justify-center items-center ">
        <div className="flex gap-3 items-center">
          <CounterContainer title="counter 1" />
          <CounterContainer title="counter 2" />
        </div>
        <div className="mt-3">
          <button
            className="bg-orange-400 w-64 text-yellow-50 p-2 rounded-md"
            onClick={() => setCounter()}
          >
            Increment Here
          </button>
        </div>
      </div>
      <Container maxWidth={1024} className="grid grid-cols-12 gap-4 w-full">
        {products ? (
          <For each={products}>
            {(product) => (
              <Card
                key={product.id}
                className="hover:scale-[103%] transition-all col-span-12 md:col-span-6 lg:col-span-3 p-8 "
              >
                <div className="w-full aspect-square mb-4">
                  <img
                    className="object-contain object-center w-full h-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <h4 className="w-full font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.title}
                </h4>
                <p className="text-2xl my-2 font-bold text-green-500">
                  {dollarCurrency(product.price)}
                </p>
                <span className="text-base font-bold">
                  {product.rating?.rate} / 5⭐
                </span>
                <button className="w-full mt-4 text-white font-semibold hover:bg-sky-700 transition-all bg-sky-400 rounded-md py-2 shadow-md shadow-sky-900">
                  Details
                </button>
              </Card>
            )}
          </For>
        ) : (
          "Loading"
        )}
      </Container>
    </div>
  );
}

export default App;
