const SubHeader = ({ text, className, position }) => {
  return (
    <div
      className={`font-bold ${
        position ? "text-center" : "text-left"
      }  md:text-left capitalize mb-3 text-lg lg:text-[22px] leading-8 ${className}`}
    >
      {text}
    </div>
  );
};
export default SubHeader;
