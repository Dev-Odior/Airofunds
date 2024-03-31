import { motion } from "framer-motion";
import { BodyText } from "../text";
import { baththub, location, bed } from "../../assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moreInfoHandler } from "../../state/servicesReducer/servicesReducer";

const ProductCard = ({
  two,
  img,
  titleSize,
  title,
  info,
  financials,
  productId,
  text,
}) => {
  const { products } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const learnMoreHandler = (id, name) => {
    dispatch(moreInfoHandler(name));
    if (products === "mortgages") {
      navigate(`/services/${products}/mortgage/${name}`);
    } else {
      navigate(`/services/${products}/${name}`);
    }
  };

  return (
    <div className="h-full flex flex-col items-start rounded-lg pt-5 ">
      <div
        className={`rounded-lg relative flex w-full ${
          two ? "h-60" : "md:h-50"
        }  overflow-hidden`}
      >
        <motion.img
          src={img}
          alt=""
          className="w-full h-full object-cover hover:scale-125 transition-all ease-linear duration-[10s]"
        />
      </div>

      <h4
        className={`font-semibold capitalize ${
          titleSize ? titleSize : "sm:text-[13px] md:text-[18px]"
        } my-5 md:my-3`}
      >
        {title}
      </h4>

      {financials ? (
        <section className="text-[#262629CC] w-full mb-3 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={location} alt="" />
              <span className="capitalize text-[12px]">{info?.location}</span>
            </div>

            {info?.bedroom && (
              <div className="flex items-center px-4 py-1 gap-2 border-[#979797] border-l border-r">
                <img src={bed} alt="" />
                <span className="capitalize text-[12px]">
                  {info?.bedroom} Bedroom
                </span>
              </div>
            )}

            {info?.bedroom && (
              <div className="flex items-center gap-2">
                <img src={baththub} alt="" />
                <span className="capitalize text-[12px]">
                  {info?.bedroom} Bedroom
                </span>
              </div>
            )}
          </div>
        </section>
      ) : (
        <div className="mb-3">
          <span className="text-[12px] capitalize -mb-5">{text}</span>
        </div>
      )}

      {financials && (
        <section className="w-full text-[#262629CC] flex flex-col gap-3 mb-4 ">
          <span className="text-[10px]">{`${financials?.investors} investors`}</span>
          <div className="flex justify-between ">
            <span className="text-[10px]">Annualized return</span>
            <span className="text-[13px] font-bold">{`${financials?.returns}%`}</span>
          </div>
          <div className="flex justify-between align-top">
            <span className="text-[10px]">Current Valuation</span>
            <span className="text-[13px] font-bold">{`₦${financials?.valuation?.toLocaleString()}`}</span>
          </div>
        </section>
      )}

      <span
        className="text-xs text-brown capitalize  md:text-[11px] 
      lg:text-[12px]  border-b border-[#262629CC] cursor-pointer"
        onClick={() => learnMoreHandler(productId, title?.toLowerCase())}
      >
        Learn more
      </span>
    </div>
  );
};

export default ProductCard;
