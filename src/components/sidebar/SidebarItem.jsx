import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../state/modals/modalsReducer";

const SidebarItem = ({ links }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateHandler = (path) => {
    navigate(path);
    dispatch(toggleSidebar());
    window.scrollTo(0, 0);
    setOpen(false);
  };

  if (links?.sub) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title " onClick={() => setOpen(!open)}>
          <span>
            <span>{links?.title}</span>
          </span>
          <i className="bi bi-chevron-down toggle-btn"></i>
        </div>

        <motion.div className="sidebar-content">
          {links?.sub.map((item, index) => {
            return <SidebarItem key={index} links={item} />;
          })}
        </motion.div>
      </div>
    );
  } else {
    return (
      <div
        className="sidebar-item"
        onClick={() => navigateHandler(links?.route)}
      >
        <div className="sidebar-title">
          <span>
            <span>{links?.title}</span>
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
