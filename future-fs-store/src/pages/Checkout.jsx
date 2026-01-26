import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderPlacedModal from "../components/OrderPlacedModal";

export default function Checkout() {
  const { getTotal, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Basic validation
    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.cardName ||
      form.cardNumber.length < 16 ||
      form.cvv.length < 3
    ) {
      setError("Please fill in all payment details correctly.");
      return;
    }

    setError("");
    setShowModal(true);
    clearCart();
  };

  const handleDone = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="border rounded p-2 w-full"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border rounded p-2 w-full"
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Address"
            className="border rounded p-2 w-full"
            onChange={handleChange}
            required
          />

          <hr className="my-4" />

          <h2 className="text-lg font-semibold">Payment Details</h2>

          <input
            name="cardName"
            placeholder="Name on Card"
            className="border rounded p-2 w-full"
            onChange={handleChange}
            required
          />
          <input
            name="cardNumber"
            placeholder="Card Number"
            maxLength="16"
            className="border rounded p-2 w-full"
            onChange={handleChange}
            required
          />

          <div className="flex gap-4">
            <input
              name="expiry"
              placeholder="MM/YY"
              maxLength="5"
              className="border rounded p-2 w-full"
              onChange={handleChange}
              required
            />
            <input
              name="cvv"
              placeholder="CVV"
              maxLength="4"
              className="border rounded p-2 w-full"
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div className="text-lg font-bold">
            Total: ${getTotal()}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg hover:opacity-90 transition text-lg font-semibold"
          >
            Place Order
          </button>
        </form>
      </div>

      <OrderPlacedModal open={showModal} onDone={handleDone} />
    </>
  );
}
