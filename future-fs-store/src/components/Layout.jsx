import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Future FS Store
          </Link>

          {/* Nav */}
          <nav className="flex gap-6 text-lg font-medium">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Cart
            </Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
