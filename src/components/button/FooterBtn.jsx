import { motion } from "framer-motion";

const FooterBtn = ({ className }) => {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      onClick={onClickHandler}
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className={className}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="21.5"
          stroke="#3C403C"
        />
        <path
          d="M22 29L22 15M22 15L16 21M22 15L28 21"
          stroke="#ECEEEC"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
};
export default FooterBtn;
