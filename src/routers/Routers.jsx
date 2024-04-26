import {
  Home,
  NotFound,
  ContactUs,
  Terms,
  PrivacyPolicy,
  Delete,
  About,
  UnderRepair,
} from "../pages";

import {
  Services,
  ServiceMain,
  Products,
  LearnMore,
  Mortgage,
} from "../pages/services";

import {
  Products as MortgageProduct,
  BreakDown,
} from "../pages/services/mortgages";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
      <Route path="/services" Component={Services}>
        <Route path="" Component={ServiceMain} />
        <Route path="/services/:products" Component={Products} />
        <Route path="/services/:products/mortgage/:id" Component={Mortgage}>
          <Route path="" Component={MortgageProduct} />
          <Route
            path="/services/:products/mortgage/:id/:mortgage"
            Component={BreakDown}
          />
        </Route>
        <Route path="/services/:products/:id" Component={LearnMore} />
      </Route>

      <Route path="*" Component={NotFound} />
    </Routes>
  );
};
export default Routers;
