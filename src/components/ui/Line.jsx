const Line = ({ dis }) => {
  return (
    <hr className={` margin-t margin-b ${dis ? "opacity-0" : "opacity-100"}`} />
  );
};
export default Line;
