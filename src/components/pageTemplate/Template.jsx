import { Container } from "../../layouts";
import { HeaderText } from "../text";
import { CallToAction, Line } from "../ui";
import { GoldBlur } from "../displays";
import { motion } from "framer-motion";

const Template = ({ children, first, second, actionTitle, actionBtnText }) => {
  return (
    <motion.main
      className="pt-28 md:pt-[165px] mb-[2rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "linear" }}
    >
      <Container>
        <div className="relative  w-full lg:w-[85%] mx-auto mb-5 md:mb-10">
          <GoldBlur position={`-top-[12rem} -left-[13rem] `} />

          <GoldBlur
            height={`186.2px`}
            width={`126px`}
            top={`-40px`}
            left={`-6rem`}
          />
          <HeaderText
            showArrow={true}
            first={first}
            second={second}
            col={false}
            className=""
          />
          <Line />
          {children}
        </div>
        {<CallToAction title={actionTitle} btnText={actionBtnText} />}
      </Container>
    </motion.main>
  );
};
export default Template;
