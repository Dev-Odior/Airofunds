import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../state/modals/modalsReducer";
import { motion } from "framer-motion";

const SidebarOverlay = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleSidebar());
  };

  const overlayVariants = {
    hidden: { opacity: 0, height: "100vh", width: "70%" },
    visible: {
      opacity: 0.5,
      height: "100vh",
      width: "100vw",
      transition: { duration: 0.1 },
    },
    exit: {
      opacity: 0,
      height: "100vh",
      width: "0vw",
      transition: { duration: 0 },
    },
  };

  return (
    <motion.div
      onClick={onClickHandler}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      className="w-full cursor-pointer h-[100vh] top-0 right-0 z-40 opacity-50 fixed bg-black"
    />
  );
};
export default SidebarOverlay;
