import { cta } from "../../assets/images/general";
import { Button } from "../button";

const CallToAction = ({ title, btnText, children, customImg }) => {
  return (
    <div
      className={`
  py-7
  md:py-24
  md:my-16
  rounded-xl
  md:rounded-2xl 
  mx-auto 
  w-full
  md:w-[100%] 
  overflow-hidden 
  border 
  grid 
  place-items-center 
  bg-cover 
  bg-center 
  relative 
  text-primary
  `}
      style={{ backgroundImage: `url(${children ? customImg : cta})` }}
    >
      {/* The Dark overlay */}
      <div
        className={`
      absolute
      inset-0
    bg-brown-overlay
    `}
      ></div>

      {/* Book a demo Section */}
      {children ? (
        <div className="z-10">{children} </div>
      ) : (
        <div
          className={`
      z-10
      grid
      place-items-center
    `}
        >
          <h3
            className={`
      text-white
        font-semibold
        mb-3
        md:mb-7
        text-[10px]
        md:text-lg
      `}
          >
            {title
              ? title
              : "Would you like more information about our platform?"}
          </h3>
          <Button name={btnText ? btnText : "contact us"} light="text-white" />
        </div>
      )}
    </div>
  );
};
export default CallToAction;
