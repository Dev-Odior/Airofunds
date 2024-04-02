import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SidebarItem } from "../components/sidebar";
import { CloseButton } from "../components/button";
import { logo } from "../assets/images/logo";

const SideBar = () => {
  const { nav } = useSelector((store) => store.nav);

  const modalVariants = {
    hidden: { height: "0", opacity: 0, width: "0%", right: "0" },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        delay: 0,
        type: "spring",
        damping: 20,
        stiffness: 200,
        duration: 0.1,
      },
    },
    exit: {
      height: "100vh",
      opacity: 0,
      width: "0%",
      transition: { delay: 0, duration: 0.1 },
    },
  };

  return (
    <motion.div
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className=" h-full bg-brown z-50 md:hidden lg:hidden fixed top-0 right-0 pt-16"
    >
      <CloseButton />
      <div className="border-t h-[85%] overflow-auto px-2 pt-5">
        {nav.map((links, index) => {
          return <SidebarItem key={index} links={links} />;
        })}
      </div>
      <img src={logo} alt="" className="h-10 mx-auto" />
    </motion.div>
  );
};
export default SideBar;
