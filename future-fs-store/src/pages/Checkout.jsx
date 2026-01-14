import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderPlacedModal from "../components/OrderPlacedModal";

export default function Checkout() {
  const { getTotal, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setShowModal(true);
    clearCart();
  };

  const handleDone = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            className="border rounded p-2 w-full"
            placeholder="Full Name"
          />
          <input
            required
            type="email"
            className="border rounded p-2 w-full"
            placeholder="Email"
          />
          <input
            required
            className="border rounded p-2 w-full"
            placeholder="Address"
          />

          <div className="text-lg font-bold">
            Total: ${getTotal()}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>

      <OrderPlacedModal
        open={showModal}
        onDone={handleDone}
      />
    </>
  );
}
