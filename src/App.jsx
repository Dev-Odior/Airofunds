import "./App.css";
import Routers from "./routers/Routers";
import { Header, Footer } from "./layouts";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBar } from "./layouts";
import { AnimatePresence } from "framer-motion";
import { Disclaimer, ModalOverlay } from "./components/modals";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleDisclaimer } from "./state/modals/modalsReducer";

function App() {
  const { openNavModal, openSidebar, disclaimer } = useSelector(
    (store) => store.modals
  );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     dispatch(toggleDisclaimer());
  //   }, 5000);

  //   return () => clearTimeout(timeoutId);
  // }, [dispatch]);

  return (
    <Router>
      <div className="relative">
        <AnimatePresence> {openNavModal && <ModalOverlay />}</AnimatePresence>
        <Header />
        <AnimatePresence>{disclaimer && <Disclaimer />}</AnimatePresence>
        <aside>
          {<AnimatePresence>{openSidebar && <SideBar />}</AnimatePresence>}
        </aside>

        <Routers />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
