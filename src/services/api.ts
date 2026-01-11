// TECHDEBT: this is while using DUMMY DATA
// import { PRODUCT_LIST, PRICE_LIST } from "./DUMMY_API";
// import { normalizeProducts } from "../utils/normalizeProducts";
// import { ProductWithPrice } from "@/types/index";

// export function fetchProducts(): Promise<ProductWithPrice[]> {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const products = normalizeProducts(
//         PRODUCT_LIST[0],
//         PRICE_LIST[0]
//       );
//       resolve(products);
//     }, 500); //delay simulation
//   });
// }

const BASE_URL = "http://localhost:4000";

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function fetchPrices() {
  const res = await fetch(`${BASE_URL}/prices`);
  return res.json();
}
