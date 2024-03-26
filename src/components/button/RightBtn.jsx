import { slideArrow } from "../../assets/icons";

const RightBtn = () => {
  return (
    <button>
      <div className="p-4 mt-7 rounded-full border border-customWhite-twenty grid place-items-center">
        <img src={slideArrow} alt="" />
      </div>
    </button>
  );
};
export default RightBtn;
