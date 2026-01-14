import { useEffect } from "react";

export default function OrderPlacedModal({ open, onDone }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onDone();
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [open, onDone]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 text-center shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-bold text-green-600">
          Order Placed 🎉
        </h2>

        <p className="mt-3 text-gray-600">
          Thank you for your purchase!  
          You’ll be redirected to the home page shortly.
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Redirecting in a few seconds...
        </p>
      </div>
    </div>
  );
}
