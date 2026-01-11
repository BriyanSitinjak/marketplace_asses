import { RawCategoryData, ProductWithPrice } from "../types/index";

export function normalizeProducts(
  productData: RawCategoryData<string>,
  priceData: RawCategoryData<number>
): ProductWithPrice[] {
  const result: ProductWithPrice[] = [];

  Object.keys(productData).forEach(category => {
    const products = productData[category];
    const prices = priceData[category];

    const priceMap = new Map(
      prices.map(item => [item.key, item.value])
    );

    products.forEach(item => {
      const price = priceMap.get(item.key);
      if (price !== undefined) {
        result.push({
          id: item.key,
          name: item.value,
          category,
          price
        });
      }
    });
  });

  return result;
}
