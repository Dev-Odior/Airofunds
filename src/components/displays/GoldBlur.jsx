import { motion } from "framer-motion";

const GoldBlur = ({ position, width, height, right, top, left }) => {
  return (
    <motion.div
      //   animate={{ scale: scale }}
      className={`h-10 w-10 absolute -z-[999] ${position}`}
      style={{
        width: width,
        height: height,
        top: top,
        right: right,
        left: left,
        background: "rgba(225, 193, 110, 1)",
        filter: "blur(150px)",
        transform: "rotate(45deg)",
      }}
    ></motion.div>
  );
};
export default GoldBlur;
