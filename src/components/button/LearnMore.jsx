const LearnMore = ({ className }) => {
  return (
    <span
      className={`inline-block cursor-pointer  text-brown text-xs md:text-[11px] 
    lg:text-[13px] hover:text-gold duration-200  border-b border-brown ${className}`}
    >
      Learn more
    </span>
  );
};
export default LearnMore;
