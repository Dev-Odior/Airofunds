const DisclaimerText = ({ children, font, title }) => {
  return (
    <span
      className={`text-white font-inter font-normal leading-[21px] ${
        font ? "text-[13px] md:text-[22px]" : "text-[12px] md:text-[18px]"
      } `}
    >
      {children}
    </span>
  );
};
export default DisclaimerText;
