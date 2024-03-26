import { slideArrow, slideArrowDark } from "../../assets/icons";
import { motion } from "framer-motion";

const LeftBtn = ({ color, padding, angle, size, dark, onClickHandler }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={onClickHandler}
      className={` ${padding ? padding : "p-4"} ${
        color ? color : "border-customWhite-twenty"
      } ${size ? size : ""} rounded-full border grid place-items-center`}
    >
      <img
        src={dark ? slideArrowDark : slideArrow}
        alt="arrow"
        className={`${angle === "left" ? "rotate-180" : ""}`}
      />
    </motion.div>
  );
};
export default LeftBtn;
