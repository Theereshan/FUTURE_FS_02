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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-10 mb-10 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-3">
          Discover Amazing Products
        </h1>
        <p className="text-lg opacity-90">
          Shop the latest trends with unbeatable prices.
        </p>
      </section>

      <h2 className="text-2xl font-bold mb-6">Shop Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div
            key={p.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"
          >
            <div className="h-44 flex items-center justify-center overflow-hidden">
              <img
                src={p.image}
                className="h-36 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <h2 className="mt-4 text-sm font-semibold line-clamp-2 min-h-[40px]">
              {p.title}
            </h2>

            <p className="text-green-600 font-bold text-lg mt-2">
              ${p.price}
            </p>

            <button
              onClick={() => handleAddToCart(p)}
              className="mt-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <AddToCartModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
