import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import OrderLayout from "./Components/OrderLoyout";

import Dashboard from "./pages/Dashboard";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";
import CancelledOrders from "./pages/CancelledOrders";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-indigo-100">
        <Navbar />

        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/orders" element={<OrderLayout />}>
                <Route index element={<CurrentOrders />} />
                <Route path="history" element={<OrderHistory />} />
                <Route path="cancelled" element={<CancelledOrders />} />
                <Route
                  path="*"
                  element={<Navigate to="/orders" replace />}
                />
              </Route>

              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;