import { arrowUp } from "../../assets/images/general";
import { motion } from "framer-motion";

const HeaderText = ({ className, first, second, col, showArrow }) => {
  return (
    <motion.h1
      className={`
      text-[22px]
      md:text-3xl
      lg:text-[38px]
      font-poppins
      capitalize
      flex
      gap-2
      md:gap-3
      ${className ? className : ""}
      ${col ? "flex-col" : "flex-row"}
      `}
    >
      <span
        className={`
        text-brown 
        font-semibold
        relative
        `}
      >
        {!second && showArrow ? (
          <img
            src={arrowUp}
            alt=""
            className="h-[.8rem] absolute -right-8 -top-1"
          />
        ) : (
          ""
        )}
        {first}
      </span>
      <span
        className={`
      text-gold 
        font-bold
        relative
        `}
      >
        {showArrow ? (
          <img
            src={arrowUp}
            alt=""
            className="h-[.8rem] absolute -right-8 -top-1"
          />
        ) : (
          ""
        )}

        {second}
      </span>
    </motion.h1>
  );
};
export default HeaderText;
