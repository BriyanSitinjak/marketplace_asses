export type RawItem<T> = {
    key: string;
    value: T;
  };
  
  export type RawCategoryData<T> = {
    [category: string]: RawItem<T>[];
  };
  
  export type Product = {
    id: string;
    name: string;
    category: string;
  };

  export type CategoryMap<T> = {
    [category: string]: RawItem<T>[];
  };

  export type ProductWithPrice = Product & {
    price: number;
  };

  export type CartItem = ProductWithPrice & {
    quantity: number;
  };