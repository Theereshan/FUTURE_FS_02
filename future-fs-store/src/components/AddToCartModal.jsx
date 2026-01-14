export default function AddToCartModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg animate-fadeIn">
        <h2 className="text-xl font-bold text-green-600">
          Added to Cart ✅
        </h2>

        <p className="mt-2 text-gray-600">
          Your item has been added successfully.
        </p>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
