const Heading = ({ first, second, size, dark, margin }) => {
  return (
    <h2
      className={`flex gap-3 align-center justify-center font-bold capitalize ${
        size ? size : "text-[40px] "
      }  ${margin}`}
    >
      <span className={`${dark ? "text-black" : "text-[#FFFFFF]"}`}>
        {first}
      </span>
      <span className="text-[#E1C16E]">{second}</span>
    </h2>
  );
};
export default Heading;
