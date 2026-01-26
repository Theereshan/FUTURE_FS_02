import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Layout() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Future FS Store
          </Link>

          <nav className="flex gap-6 text-lg font-medium">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>

            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-blue-600 transition"
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
