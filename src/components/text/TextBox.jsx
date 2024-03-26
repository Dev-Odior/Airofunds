import BodyText from "./BodyText";
import { Button } from "../button";
import SubHeader from "./SubHeader";
import ListText from "./ListText";
import { motion } from "framer-motion";

const TextBox = ({ content, img, btnText, title, list, position, hideBtn }) => {
  return (
    <motion.div
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`flex lg:w-[95%] flex-col md:flex-row ${
        position ? "items-start" : "items-center"
      } justify-between gap-7 md:gap-15 text-2xl mb-6 md:mb-16`}
    >
      {/* The Content */}
      <div className="w-full md:text-left md:w-[52%] ">
        <SubHeader text={title} />
        {!list ? (
          <BodyText className="text-justify  ">{content}</BodyText>
        ) : (
          <ListText content={list} />
        )}

        {hideBtn ? "" : <Button name={btnText} padding="px-8" />}
      </div>

      {/* The Image */}
      <img
        src={img}
        alt=""
        className="md:h-60 hover:-translate-y-2 duration-300 transition-all ease-linear"
      />
    </motion.div>
  );
};
export default TextBox;
