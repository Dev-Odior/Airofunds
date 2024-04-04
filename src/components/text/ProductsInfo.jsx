import { Button } from "../button";

const ProductsInfo = ({ title, desc, img }) => {
  return (
    <div className="border shadow-md md:hidden rounded-2xl flex flex-col p-6 mb-6">
      <img src={img} loading="lazy" alt="" className="mb-3 rounded-2xl" />
      <h3 className="mb-3 font-bold">{title}</h3>
      <p className="text-[11.5px] text-grayish-infoText">{desc}</p>
      <Button
        name="Exploring Lending"
        padding="py-3"
        size="text-[12px]"
        border="border-[1.3px]"
      />
    </div>
  );
};
export default ProductsInfo;
