import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useCart } from "../context/CartContext";
import AddToCartModal from "../components/AddToCartModal";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAddToCart = product => {
    addToCart(product);
    setShowModal(true);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Shop Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col"
          >
            <img src={p.image} className="h-40 object-contain mx-auto" />

            <h2 className="mt-3 text-sm font-semibold line-clamp-2">
              {p.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ${p.price}
            </p>

            <button
              onClick={() => handleAddToCart(p)}
              className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <AddToCartModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
