import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Button = ({
  name,
  light,
  hidden,
  padding,
  size,
  border,
  className,
  children,
  route,
}) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (name.toLowerCase() === "contact us") {
      navigate("/contact");
    }

    if (route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(route);
    }
  };

  return (
    <motion.button
      onClick={onClickHandler}
      whileTap={{ scale: 0.95 }}
      className={`
      ${size ? size : " text-[6px] md:text-[8px]"} 
      ${border ? border : "border-[1.3px]"}
      ${padding ? padding : "py-[0.5rem] p-6 md:py-2 md:p-7"}
      ${
        light
          ? "border-white"
          : "border-black hover:bg-brown hover:scale-105 duration-500 group hover:text-whitish-slight"
      }
      ${hidden ? "hidden" : ""}
      rounded-full
      font-roboto
      font-normal
      uppercase 
      outline-none 
      border
      flex 
      items-center
      justify-center 
      gap-2
      ${className ? className : ""}
      
      `}
    >
      {children}
      <span className={`${light ? "text-white" : ""}`}>{name}</span>
      <motion.svg
        width="7"
        height="4"
        viewBox="0 0 10 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={light ? light : ""}
      >
        <motion.path
          d="M7.24695 3.075C7.37695 2.79767 7.50262 2.555 7.62395 2.347C7.75395 2.139 7.87962 1.96567 8.00095 1.827H0.421951V1.281H8.00095C7.87962 1.13367 7.75395 0.956 7.62395 0.748C7.50262 0.54 7.37695 0.301666 7.24695 0.0329997H7.70195C8.24795 0.665667 8.81995 1.13367 9.41795 1.437V1.671C8.81995 1.96567 8.24795 2.43367 7.70195 3.075H7.24695Z"
          className="group group-hover:text-white"
          fill={light ? "white" : "#212121"}
        />
      </motion.svg>
    </motion.button>
  );
};
export default Button;
