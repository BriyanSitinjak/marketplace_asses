import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loadProducts } from "../features/products/productSlice";
import { selectCategories, selectProducts } from "../features/products/productSelector";
import { addToCart } from "../features/cart/cartSlice";
import { ProductCard } from "../components/ProductCard";
import { CategoryTabs } from "../components/CategoryTabs";
import { useNavigate } from "react-router-dom";

export function CataloguePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(state => state.products.status);
  const cart = useAppSelector(state => state.cart); 

  const [activeCategory, setActiveCategory] = useState("ALL");

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const visibleProducts =
    activeCategory === "ALL"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <div className="page">
      <h1>Product Catalogue</h1>

      <CategoryTabs
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {status === "loading" && <p>Loading products...</p>}

      <div className="wrapper">
        <div className="grid">
          {visibleProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => dispatch(addToCart(product))}
            />
          ))}
        </div>
      </div>

      <div className="checkout-bar">
        <span>{totalItems} item(s) in cart</span>

        <button
          className="checkout-btn"
          disabled={totalItems === 0}
          onClick={() => navigate("/checkout")}
        >
          Go To Checkout
        </button>
      </div>
    </div>
  );
}
