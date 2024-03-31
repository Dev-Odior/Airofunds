const BodyText = ({ children, className, center, light, white }) => {
  return (
    <p
      className={`
      ${light ? "text-[#FFFFFFB2]" : " text-grayish-infoText "}
      ${white && "text-white"}
        md:text-[12px] 
        font-inter
        lg:text-[13px]
        leading-5
        md:leading-7
        ${center ? "text-center" : "text-justify"}
        ${className ? className : ""}
       `}
    >
      {children}
    </p>
  );
};
export default BodyText;
