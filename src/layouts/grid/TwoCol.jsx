const TwoCol = ({ children, className, gap }) => {
  return (
    <div
      className={`${className} grid grid-cols-1 md:grid-cols-2 ${
        gap ? gap : "gap-10 md:gap-16"
      }`}
    >
      {children}
    </div>
  );
};
export default TwoCol;
