import { LearnMore } from "../button";
import { CardHeader, CardText } from "../text";
import CardWrapper from "./CardWrapper";

const StyleTwo = ({ moreInfo, title, desc }) => {
  return (
    <CardWrapper className="rounded-md py-10 px-7 md:px-7">
      <CardHeader cardTitle={title} />
      <CardText content={desc} />
      {moreInfo ? (
        <LearnMore className="group-hover:text-whitish-slight group-hover:border-whitish-slight" />
      ) : (
        ""
      )}
    </CardWrapper>
  );
};
export default StyleTwo;
