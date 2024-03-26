import { GoldBlur } from "../components/displays";
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

      {blur && (
        <GoldBlur
          height={`186.2px`}
          width={`126px`}
          top={top ? top : `45%`}
          left={left ? left : `45%`}
        />
      )}

      {three ? (
        <ThreeCol gap={gap}>{children}</ThreeCol>
      ) : (
        <TwoCol gap={gap}>{children}</TwoCol>
      )}
    </div>
  );
};
export default CardTemplate;
