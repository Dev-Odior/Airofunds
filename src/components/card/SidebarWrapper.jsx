import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../state/nav/navReducer";

const SidebarWrapper = ({ children, route }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(toggleSidebar());
    navigate(route);
  };

  return (
    <motion.div
      onClick={onClickHandler}
      whileTap={{ backgroundColor: "rgba(38, 38, 41, 1)" }}
      active={true}
      className="border text-sm shadow-md py-5 px-3 rounded-lg mb-4"
    >
      {children}
    </motion.div>
  );
};
export default SidebarWrapper;
