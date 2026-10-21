import React from "react";

function CurrentOrders() {
  const orders = [
    {
      id: "#ORD101",
      product: "Wireless Headphones",
      price: "₹1,999",
      status: "Shipped",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "#ORD102",
      product: "Smart Watch",
      price: "₹2,499",
      status: "Processing",
      color: "bg-amber-100 text-amber-700",
    },
    {
      id: "#ORD103",
      product: "Running Shoes",
      price: "₹1,799",
      status: "Out for Delivery",
      color: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">
        Current Orders
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <p className="text-sm text-gray-500">{order.id}</p>
                <h3 className="font-bold text-lg text-slate-800 mt-1">
                  {order.product}
                </h3>
                <p className="font-semibold text-indigo-700 mt-2">
                  {order.price}
                </p>
              </div>

              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${order.color}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;