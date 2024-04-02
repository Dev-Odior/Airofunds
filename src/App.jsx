import "./App.css";
import Routers from "./routers/Routers";
import { Header, Footer } from "./layouts";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBar } from "./layouts";
import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";

function App() {
  const { openSidebar } = useSelector((store) => store.modals);

  return (
    <Router>
      <div className="relative">
        <Header />

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
