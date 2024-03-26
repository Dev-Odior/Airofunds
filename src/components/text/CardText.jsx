const CardText = ({ content, font }) => {
  return (
    <p
      className={`md:text-[12px] font-medium text-grayish-styleTwoText leading-7 group-hover:text-whitish-slight ${font}`}
    >
      {content}
    </p>
  );
};
export default CardText;
