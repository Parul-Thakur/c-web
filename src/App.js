// App.jsx
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Pages/Login/Login";
import { useTheme } from "./ThemeContext";
import Layout from "./Layout";
import Document from "./Pages/Document/Document";
import "./App.css";
import History from "./Pages/History/History";
import UploadPrint from "./Pages/UploadPrint/UploadPrint";
import RemotePrint from "./Pages/RemotePrint/RemotePrint";
import Account from "./Pages/Account/Account";
import TopUp from "./Pages/TopUp/TopUp";
import Pricing from "./Pages/Pricing/PricingConfig";
import EditPriceScheme from "./Pages/Pricing/EditPriceScheme";
import LLA from "./Pages/LLA/LLA";

export default function App() {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/documents" element={<Document />} />
          <Route path="/history" element={<History />} />
          <Route path="/upload-print" element={<UploadPrint />} />
          <Route path="/remote-print" element={<RemotePrint />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/account/topup" element={<TopUp/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/pricing/:id" element={<EditPriceScheme/>} />
          <Route path="/reset-pin" element={<LLA/>} />
        
          {/* Add more routes here if needed */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
