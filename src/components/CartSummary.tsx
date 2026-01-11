import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCartTotal } from "../features/cart/cartSelector";
import { formatRupiah } from "../utils/formatCurrency";

export function CartSummary() {
  const navigate = useNavigate();
  const cart = useAppSelector(state => state.cart);
  const total = useAppSelector(selectCartTotal);

  if (cart.length === 0) {
    return (
      <div className="wrapper">
        <p>Your cart is empty.</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
  );
  }

  return (
    <div className="card">
      <h3>Order Summary</h3>

      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} × {item.quantity}
            <span>{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <hr />
      <strong>Total: {formatRupiah(total)}</strong>
    </div>
  );
}
