import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
        Welcome to ShopEase
      </p>

      <h1 className="text-4xl font-bold text-slate-900 mt-3">
        Order Management
      </h1>

      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Manage your purchases, track current deliveries,
        view order history, and check cancelled orders
        in one place.
      </p>

      <Link
        to="/orders"
        className="inline-block mt-8 bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md"
      >
        View My Orders
      </Link>

      <div className="grid sm:grid-cols-3 gap-4 mt-10 text-left">
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
          <h2 className="font-bold text-indigo-800">Current Orders</h2>
          <p className="text-sm text-gray-600 mt-2">
            Track your deliveries.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
          <h2 className="font-bold text-emerald-800">Order History</h2>
          <p className="text-sm text-gray-600 mt-2">
            Review completed purchases.
          </p>
        </div>

        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
          <h2 className="font-bold text-rose-800">Cancelled Orders</h2>
          <p className="text-sm text-gray-600 mt-2">
            Review cancelled purchases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;