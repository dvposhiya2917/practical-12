import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function OrderLayout() {
  const linkStyle = ({ isActive }) =>
    `block px-4 py-3 rounded-xl font-medium transition ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
    }`;

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">
          Account Center
        </p>

        <h1 className="text-3xl font-bold text-slate-900 mt-2">
          My Orders
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and review all your purchases.
        </p>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-6">
        <aside className="bg-slate-50 border border-slate-200 rounded-2xl p-3 h-fit">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 px-3 py-2">
            Order Categories
          </h2>

          <nav className="flex flex-col gap-2">
            <NavLink
              to="/orders"
              end
              className={linkStyle}
            >
              Current Orders
            </NavLink>

            <NavLink
              to="history"
              className={linkStyle}
            >
              Order History
            </NavLink>

            <NavLink
              to="cancelled"
              className={linkStyle}
            >
              Cancelled Orders
            </NavLink>
          </nav>
        </aside>

        <section className="min-w-0">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default OrderLayout;