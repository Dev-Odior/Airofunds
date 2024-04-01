import Heading from "./Heading";
import BodyText from "./BodyText";

const HeaderBody = ({ first, second, dark, width, text }) => {
  return (
    <div
      className={`${
        width ? width : " w-full md:w-[65%]"
      } mx-auto flex flex-col gap-3`}
    >
      <Heading first={first} second={second} dark={dark} />
      <BodyText center={true}>{text}</BodyText>
    </div>
  );
};
export default HeaderBody;
