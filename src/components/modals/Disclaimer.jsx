import { motion } from "framer-motion";
import { toggleDisclaimer } from "../../state/modals/modalsReducer";
import { useDispatch } from "react-redux";
import { close } from "../../assets/icons";
import { DisclaimerText } from "../text";

const DisclaimerMobile = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleDisclaimer());
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 0.85,
      zIndex: 999999999,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="fixed top-0 w-full h-[100vh]  z-[999999999]">
      <motion.div
        style={{ backdropFilter: "blur(5px)" }}
        className="bg-brown-overlay absolute top-0 w-full h-[100vh] flex items-start justify-center md:grid md:place-items-center "
      ></motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className="text-white rounded-xl overflow-hidden flex flex-col gap-3 md:gap-10  max-w-[750px]  px-5 pt-8 pb-6 md:px-10 md:py-20 mx-auto text-center lg:text-justify border-[0.4px] mt-8 md:mt-0"
        style={{
          background:
            "linear-gradient(110.72deg, rgba(255, 255, 255, 0.3) 1.21%, rgba(196, 196, 196, 0.05) 100%)",
          border: "0.2px solid",
          borderImageSource:
            "linear-gradient(112.56deg, rgba(255, 255, 255, 0.5) -44.56%, rgba(255, 250, 203, 0.381967) 38.26%, rgba(255, 57, 57, 0.05) 59.34%, rgba(255, 255, 255, 0.425) 100%)",
          boxShadow: "100px 98px 27px 0px rgba(133, 87, 87, 0)",
        }}
      >
        <div className="flex items-center gap-4 justify-center relative mb-3">
          <DisclaimerText font={true}>
            <b>Airopay’s Disclaimer</b>
          </DisclaimerText>
          <img
            src={close}
            alt=""
            className=" absolute right-5 cursor-pointer"
            onClick={onClickHandler}
          />
        </div>

        <DisclaimerText>
          <span className="font-bold">Press Release Disclaimer:</span>
          Airopay and Airomoni <b>Not</b>
          <br className="md:hidden" /> <b>Affiliated with Airopay</b>{" "}
          <br className="md:hidden" /> Chase Bank, Airopay Investment Platform,
          Airopay SA <br className="md:hidden" />
          or any other associated <br className="md:hidden" />
          platform with the brand names.
        </DisclaimerText>

        <DisclaimerText>
          It has been brought to our attention that fake accounts{" "}
          <br className="md:hidden" /> with the usernames ,
          <br className="md:hidden" /> "airopay sa" , “Airopay Investment
          Platform “and ,<br className="md:hidden" />
          "Airopay_chase_bank" have <br className="md:hidden" /> been created on
          social media platforms such as <br className="md:hidden" /> Instagram
          and YouTube.
          <br className="md:hidden" /> These accounts have been going about
          cloning the <br className="md:hidden" /> designs and videos from{" "}
          <br className="md:hidden" /> the real pages of Airopay on Instagram,
          which is <br className="md:hidden" /> @airopayinc, @airomoni and{" "}
          <br className="md:hidden" /> on YouTube "Airopay Inc".
        </DisclaimerText>

        <DisclaimerText>
          <span className="font-bold">
            We only operate in Nigeria, UAE, UK & USA.
          </span>{" "}
          <br className="md:hidden" />
          We want to clarify that Airopay and Airomoni are{" "}
          <br className="md:hidden" />
          not in any way associated with <br className="md:hidden" />
          these fake accounts and would like to warn the{" "}
          <br className="md:hidden" /> public in Ghana Nigeria and
        </DisclaimerText>
      </motion.div>
    </div>
  );
};
export default DisclaimerMobile;
