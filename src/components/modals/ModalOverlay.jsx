import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../state/modals/modalsReducer";

const ModalOverlay = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleModal());
  };

  const overlayVariants = {
    hidden: { opacity: 0, height: "0vh" },
    visible: {
      opacity: 1,
      height: "100vh",
      backdropFilter: "blur(5px)",
      transition: { duration: 0.05 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.05 } },
  };

  return (
    <motion.div
      onClick={onClickHandler}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      className="w-full cursor-pointer h-[100vh] overflow-hidden fixed top-0 left-0 z-30 bg-brown-overlay"
    />
  );
};
export default ModalOverlay;
