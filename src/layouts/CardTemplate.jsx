import { SubHeader } from "../components/text";
import { TwoCol, ThreeCol } from "./grid";

const CardTemplate = ({
  blur,
  top,
  left,
  title,
  children,
  className,
  three,
  gap,
  position,
}) => {
  return (
    <div className="relative">
      <SubHeader
        position={position}
        text={title}
        className={`mb-7 ${className}`}
      />

      {three ? (
        <ThreeCol gap={gap}>{children}</ThreeCol>
      ) : (
        <TwoCol gap={gap}>{children}</TwoCol>
      )}
    </div>
  );
};
export default CardTemplate;
