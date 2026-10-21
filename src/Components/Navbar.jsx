import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold">
          ShopEase
        </Link>

        <div className="flex gap-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/orders"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            My Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;