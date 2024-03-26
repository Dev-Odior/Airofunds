import BodyText from "./BodyText";

const ListedDescription = ({ list }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
      {list.map((item, index) => {
        return (
          <div key={index}>
            <li className="font-medium text-[13px] mb-1">{item?.title} -</li>
            <BodyText>{item?.desc}</BodyText>
          </div>
        );
      })}
    </div>
  );
};
export default ListedDescription;
