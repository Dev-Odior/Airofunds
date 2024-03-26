const CardHeader = ({ cardTitle, className, position }) => {
  return (
    <h5
      className={`font-bold text-[16px] lg:text-[18px] mb-2 md:mb-3 group-hover:text-gold-deep ${className}`}
    >
      {cardTitle}
    </h5>
  );
};
export default CardHeader;
