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

  export type Price = {
    productId: string;
    price: number;
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

  export type ProductState = {
    list: ProductWithPrice[];
    status: "idle" | "loading" | "success" | "error";
  };