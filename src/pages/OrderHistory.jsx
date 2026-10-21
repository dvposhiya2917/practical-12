import React from "react";

function OrderHistory() {
  const orders = [
    {
      id: "#ORD088",
      product: "Bluetooth Speaker",
      price: "₹1,299",
      date: "12 September 2026",
    },
    {
      id: "#ORD076",
      product: "Travel Backpack",
      price: "₹999",
      date: "28 August 2026",
    },
    {
      id: "#ORD064",
      product: "Cotton T-Shirt",
      price: "₹599",
      date: "15 August 2026",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">
        Order History
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-emerald-100 bg-emerald-50/50 rounded-2xl p-5"
          >
            <p className="text-sm text-gray-500">{order.id}</p>

            <h3 className="font-bold text-lg text-slate-800 mt-1">
              {order.product}
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Ordered on: {order.date}
            </p>

            <div className="flex justify-between items-center mt-4 gap-2">
              <span className="font-bold text-emerald-700">
                {order.price}
              </span>

              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                Delivered
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;