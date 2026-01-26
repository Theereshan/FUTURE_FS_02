import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cart.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">
          Go shopping →
        </Link>
      </div>
    );

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="bg-white rounded-2xl shadow-md divide-y">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <img src={item.image} className="h-16 w-16 object-contain" />
              <div>
                <h2 className="font-semibold text-sm">{item.title}</h2>
                <p className="text-green-600 font-bold">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={e => updateQuantity(item.id, +e.target.value)}
                className="border rounded w-16 text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 p-4 bg-white rounded-xl shadow">
        <div className="text-2xl font-bold">Total: ${getTotal()}</div>

        <Link
          to="/checkout"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </>
  );
}
