import {
  Home,
  NotFound,
  ContactUs,
  Terms,
  PrivacyPolicy,
  Delete,
  About,
} from "../pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Routers = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" Component={Home} />
      <Route path="/terms" Component={Terms} />
      <Route path="/privacy-policy" Component={PrivacyPolicy} />
      <Route path="/delete-account" Component={Delete} />
      <Route path="/about-us" Component={About} />
      <Route path="/contact" Component={ContactUs} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
};
export default Routers;
