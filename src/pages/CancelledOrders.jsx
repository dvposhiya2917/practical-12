import React from "react";

function CancelledOrders() {
  const orders = [
    {
      id: "#ORD091",
      product: "Laptop Stand",
      price: "₹799",
      reason: "Changed my mind",
    },
    {
      id: "#ORD085",
      product: "USB Keyboard",
      price: "₹1,099",
      reason: "Ordered by mistake",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">
        Cancelled Orders
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-rose-200 bg-rose-50/50 rounded-2xl p-5"
          >
            <p className="text-sm text-gray-500">{order.id}</p>

            <h3 className="font-bold text-lg text-slate-800 mt-1">
              {order.product}
            </h3>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mt-4">
              <div>
                <p className="text-sm text-gray-600">
                  Reason: {order.reason}
                </p>

                <p className="font-bold text-slate-800 mt-2">
                  {order.price}
                </p>
              </div>

              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                Cancelled
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;