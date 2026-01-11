import { PRODUCT_LIST, PRICE_LIST } from "./DUMMY_API";
import { normalizeProducts } from "../utils/normalizeProducts";
import { ProductWithPrice } from "@/types/index";

export function fetchProducts(): Promise<ProductWithPrice[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const products = normalizeProducts(
        PRODUCT_LIST[0],
        PRICE_LIST[0]
      );
      resolve(products);
    }, 600); // simulate network delay
  });
}

