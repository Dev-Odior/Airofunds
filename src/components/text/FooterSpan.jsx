const FooterSpan = ({ children, font, noMb }) => {
  return (
    <span
      className={`
      text-[#3C403C] 
      font-semibold
      font-bricolage
      ${noMb ? noMb : "mb-2"}

      ${font ? font : "text-[9px]"}`}
    >
      {children}
    </span>
  );
};
export default FooterSpan;
