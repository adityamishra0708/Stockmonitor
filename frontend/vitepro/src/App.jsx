import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landingpage/home/HomePage";
import Signup from "./landingpage/signup/Signup";
import AboutPage from "./landingpage/about/AboutPage";
import ProductPage from "./landingpage/products/ProductPage";
import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import NotFound from "./landingpage/NotFound";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Payment from "./landingpage/payment/Payment";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
