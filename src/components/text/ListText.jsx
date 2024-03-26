const ListText = ({ className, content }) => {
  return (
    <ul
      className={`
    text-grayish-infoText 
      md:text-[12px] 
      lg:text-[13px]
      leading-7
      md:leading-8
      pl-5
      list-disc
      list-outside
    ${className ? className : ""}
   `}
    >
      {content.map((item, index) => {
        return (
          <li key={index} className="mb-2">
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default ListText;
