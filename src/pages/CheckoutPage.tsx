import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { simulateCheckout, resetCheckout } from "../features/checkout/checkoutSlice";
import { clearCart } from "../features/cart/cartSlice";
import { CartSummary } from "../components/CartSummary";

export function CheckoutPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector(state => state.cart);
  const checkoutStatus = useAppSelector(state => state.checkout.status);

  if (cart.length === 0 && checkoutStatus === "idle") {
    return (
      <div className="page">
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
        <button
          className="secondary-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const handleCheckout = async () => {
    await dispatch(simulateCheckout());
    dispatch(clearCart());
  };

  return (
    <div className="page">
      <h1>Checkout</h1>

      {checkoutStatus === "idle" && (
        <>
          <CartSummary />
          <button
            className="primary-btn"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}

      {checkoutStatus === "loading" && (
        <p>Processing your order...</p>
      )}

      {checkoutStatus === "success" && (
        <div className="checkout">
          <h2>Congratulations!!</h2>
          <button
            className="secondary-btn"
            onClick={() => {
              dispatch(resetCheckout());
              navigate("/");
            }}
          >
            Go Back Home
          </button>
        </div>
      )}
    </div>
  );
}
