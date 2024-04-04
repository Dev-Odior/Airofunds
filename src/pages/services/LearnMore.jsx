import { Main } from "../../components/pageTemplate";
import { Container } from "../../layouts";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BodyText } from "../../components/text";
import { useEffect } from "react";
import {
  moreInfoHandler,
  serviceActiveNav,
} from "../../state/servicesReducer/servicesReducer";

import { download, pdf } from "../../assets/icons";
import { Button } from "../../components/button";

const LearnMore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productInfo } = useSelector((store) => store.services);
  const { products, id } = useParams();

  useEffect(() => {
    dispatch(serviceActiveNav(products));
    dispatch(moreInfoHandler(id));
  }, []);

  const Span = ({ two, children, className }) => {
    return (
      <span
        className={` ${className} ${
          two ? "text-[13px] font-bold" : "text-[10px]"
        }`}
      >
        {children}
      </span>
    );
  };

  const backHandler = () => {
    navigate(`/services/${products}`);
  };

  return (
    <Main hide={true}>
      <Container>
        <button
          onClick={backHandler}
          className="border border-[#212121] py-1 md:py-2 text-center px-5 md:px-10 rounded-full mb-5 text-sm"
        >
          <span className="mr-2">←</span>
          Back
        </button>
        <div className="flex flex-col md:flex-row gap-2 items-stretch">
          <div>
            <img loading="lazy" src={productInfo?.extraImages?.[0]} alt="" />
          </div>

          <div className="flex flex-grow">
            <div className="grid grid-cols-2 gap-2">
              <img loading="lazy" src={productInfo?.extraImages?.[1]} alt="" />
              <img loading="lazy" src={productInfo?.extraImages?.[2]} alt="" />
              <img loading="lazy" src={productInfo?.extraImages?.[3]} alt="" />
              <img loading="lazy" src={productInfo?.extraImages?.[4]} alt="" />
            </div>
          </div>
        </div>
        <main>
          <h2 className="font-semibold text-[2rem] mt-4 my-3">
            {productInfo?.title}
          </h2>

          <BodyText>{productInfo?.desc}</BodyText>

          <section className="flex gap-1 md:gap-10  flex-col md:flex-row mb-3">
            <div className="w-[100%] ">
              <h4 className="font-semibold capitalize text-lg">overview</h4>
              <BodyText>{productInfo?.overview}</BodyText>
            </div>

            {!productInfo?.mortgage && (
              <div className="  flex flex-col gap-3 md:w-[40%]">
                <h4 className="font-semibold text-lg capitalize">financials</h4>

                <div className="flex justify-between ">
                  <Span>Property Price</Span>
                  <Span
                    two={true}
                  >{`₦${productInfo?.financials?.propertyPrice?.toLocaleString()}`}</Span>
                </div>
                <div className="flex justify-between ">
                  <Span>Transaction cost</Span>
                  <Span
                    two={true}
                  >{`${productInfo?.financials?.returns}%`}</Span>
                </div>
                <div className="flex justify-between align-top">
                  <Span>Fee</Span>
                  <Span
                    two={true}
                  >{`${productInfo?.financials?.returns}%`}</Span>
                </div>
                <hr />
                <div className="flex justify-between align-top">
                  <Span>Investment Cost</Span>
                  <span className="text-[13px] font-bold">{`₦${productInfo?.financials?.propertyPrice?.toLocaleString()}`}</span>
                </div>
              </div>
            )}
          </section>

          {productInfo?.mortgage && (
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
                        <span className="text-[9px] mb-2 ">
                          Monthly payment
                        </span>
                        <span className="text-[15px] text-[#1A1A1ACC] font-semibold">{`₦${each?.monthlyPayment?.toLocaleString()}`}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <section>
            <h4 className="font-semibold capitalize text-lg mt-8 my-5">
              Documents
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 gap-y-5 w-full">
              {productInfo?.document?.map((each, index) => {
                return (
                  <div
                    key={index}
                    className="py-2 px-2 border border-[#ADB3AB] rounded-lg flex justify-between cursor-pointer hover:-translate-y-[0.1rem] duration-500 hover:shadow-md"
                  >
                    <div className="flex gap-2 w-[70%] items-center">
                      <img src={pdf} alt="" />
                      <span className="text-[12px] text-[#262629CC] capitalize">
                        {each.name}
                      </span>
                    </div>

                    <img
                      src={download}
                      alt=""
                      className="self justify-self-end"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </Container>
    </Main>
  );
};
export default LearnMore;
