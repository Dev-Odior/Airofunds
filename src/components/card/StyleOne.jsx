import { BodyText } from "../text";
import { motion } from "framer-motion";

const StyleOne = ({
  title,
  desc,
  img,
  height,
  titleSize,
  moreInfo,
  overlay,
  two,
}) => {
  return (
    <div className="h-full flex flex-col items-start border  px-5 rounded-lg pt-5 shadow-md">
      {/* <div className="w-full h-60 border"></div> */}

      <div
        className={`rounded-lg relative flex w-full ${
          two ? "h-50" : "md:h-40"
        }  overflow-hidden`}
      >
        {overlay && (
          <div
            className={`
            absolute
            inset-0
          bg-brown
            opacity-40
      `}
          ></div>
        )}

        <motion.img
          src={img}
          alt=""
          className="w-full h-full object-cover hover:scale-125 transition-all ease-linear duration-[10s]"
        />
      </div>

      <h4
        className={`font-semibold capitalize ${
          titleSize ? titleSize : "sm:text-lg md:text-xl"
        } my-4 md:my-3`}
      >
        {title}
      </h4>

      <BodyText className="text-justify md:text-left">{desc}</BodyText>

      {moreInfo ? (
        <span
          className=" text-brown text-xs md:text-[11px] 
        lg:text-[13px]  border-b border-brown"
        >
          Learn more
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
export default StyleOne;
