import { ProductWithPrice } from "@/types/index";
import { formatRupiah } from "../utils/formatCurrency";

type Props = {
  product: ProductWithPrice;
  onAdd: () => void;
};

export function ProductCard({ product, onAdd }: Props) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">{formatRupiah(product.price)}</p>

      <button className="primary" onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}
