import { useSelector } from "react-redux";
import { Button } from "../../../components/button";

const Products = () => {
  const { productInfo } = useSelector((store) => store.services);
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5 mb-5">
      {productInfo?.mortgage.map((each, index) => {
        return (
          <div key={index} className="border rounded-2xl py-5 px-5">
            <div className="grid grid-cols-3">
              <div className="flex flex-col">
                <span className="text-[9px] mb-2">3 years fixed</span>
                <span className="text-[15px] mb-8 text-[#1A1A1ACC] font-semibold">
                  {each?.fixed}
                </span>
                <Button name={`view breakdown`} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] mb-2 ">Mortgage type</span>
                <span className="text-[15px] text-[#1A1A1ACC] font-semibold">
                  {each?.type}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] mb-2 ">Monthly payment</span>
                <span className="text-[15px] text-[#1A1A1ACC] font-semibold">{`₦${each?.monthlyPayment?.toLocaleString()}`}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
