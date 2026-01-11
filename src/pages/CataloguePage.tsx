import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loadProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export function CataloguePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { list, status } = useAppSelector(state => state.products);
  const cart = useAppSelector(state => state.cart);

  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  const categories = [
    "ALL",
    ...Array.from(new Set(list.map(p => p.category)))
  ];

  const filteredProducts =
    activeCategory === "ALL"
      ? list
      : list.filter(p => p.category === activeCategory);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="page">
      <h1>Catalogue</h1>

      {/* CATEGORY TABS */}
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>Rp {product.price.toLocaleString("id-ID")}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CHECKOUT BUTTON */}
      <div className="checkout-bar">
        <span>{totalItems} item(s)</span>
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
