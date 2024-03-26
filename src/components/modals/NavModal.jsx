import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { NavTable } from "../text";

const NavModal = ({ onClickHandler }) => {
  const { navLinks, nav } = useSelector((store) => store.nav);

  function findActiveIndex(arr) {
    let activeIndex = -1;
    let arrayLength = arr.length;

    arr.forEach((obj, index) => {
      if (obj.active === true) {
        activeIndex = index;
      }
    });

    let percentage = activeIndex !== -1 ? 25 + (activeIndex - 1) * 15 : 0;
    console.log(percentage);
    return { activeIndex, arrayLength, percentage };
  }

  const { percentage } = findActiveIndex(nav);

  const modalVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: "11vh",
      left: `${percentage - 10}%`,
      position: "absolute",
      backdropFilter: "blur(15px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    exit: { y: "-100vh", transition: { delay: 1, duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={onClickHandler}
        className={`cursor-pointer font-inter text-brown-deep absolute  `}
      >
        <div className="modal flex gap-16 justify-between items-start rounded-xl pt-4 pb-1 px-6">
          {navLinks.map((link, index) => {
            return <NavTable key={index} title={link?.title} sub={link?.sub} />;
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default NavModal;
