const CardWrapper = ({ children, className, center }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg group text-center hover:bg-grayish hover:-translate-y-2 duration-700 h-full flex flex-col ${
        center ? "items-center justify-between" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default CardWrapper;
