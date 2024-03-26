import { hamburger } from "../../assets/icons";

const Hamburger = ({ className, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${className ? className : ""} outline-none border-none`}
    >
      <img src={hamburger} alt="" />
    </button>
  );
};
export default Hamburger;
