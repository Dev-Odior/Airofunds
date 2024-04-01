const FooterSpan = ({ children, font, noMb, className }) => {
  return (
    <span
      className={`
      uppercase
    text-white
      font-normal font-inter opacity-50
      ${className}`}
    >
      {children}
    </span>
  );
};
export default FooterSpan;
