import { Product, Price, ProductWithPrice } from "@/types";

export function mergeProducts(
  products: Product[],
  prices: Price[]
): ProductWithPrice[] {
  const priceMap = new Map<string, number>();

  prices.forEach(p => {
    priceMap.set(p.productId, p.price);
  });

  return products.map(product => ({
    ...product,
    price: priceMap.get(product.id) ?? 0
  }));
}
