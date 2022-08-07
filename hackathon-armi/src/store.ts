import { createResource, createSignal } from "solid-js";

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
let idx = 1;

export const [counter, setCounter] = createSignal(0);

const fetcher = async() => {
    return (await fetch("https://fakestoreapi.com/products")).json();
}

export const [products] = createResource<productProp[]>(fetcher)