import { Main } from "../../components/pageTemplate";
import { Container } from "../../layouts";
import { Outlet, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BodyText } from "../../components/text";
import { useEffect } from "react";
import { moreInfoHandler } from "../../state/servicesReducer/servicesReducer";
import { download, pdf } from "../../assets/icons";
import { Button } from "../../components/button";

const Mortgage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productInfo } = useSelector((store) => store.services);
  const { products, id } = useParams();

  useEffect(() => {
    dispatch(moreInfoHandler(id));
  }, []);

  const backHandler = () => {
    navigate(`/services/${products}`);
  };

  return (
    <Main hide={true}>
      <Container>
        <button
          onClick={backHandler}
          className="border border-[#212121] py-2 text-center px-10 rounded-full mb-5 text-sm"
        >
          <span className="mr-2">←</span>
          Back
        </button>
        <div className="flex gap-2 items-stretch">
          <div>
            <img src={productInfo?.extraImages[0]} alt="" />
          </div>

          <div className="flex flex-grow">
            <div className="grid grid-cols-2 gap-2">
              <img src={productInfo?.extraImages[1]} alt="" />
              <img src={productInfo?.extraImages[2]} alt="" />
              <img src={productInfo?.extraImages[3]} alt="" />
              <img src={productInfo?.extraImages[4]} alt="" />
            </div>
          </div>
        </div>
        <main>
          <h2 className="font-semibold text-[2rem] mt-4 my-3">
            {productInfo?.title}
          </h2>

          <BodyText>{productInfo?.desc}</BodyText>

          <section className="flex gap-10  mb-3">
            <div className="w-[100%] ">
              <h4 className="font-semibold capitalize text-lg">overview</h4>
              <BodyText>{productInfo?.overview}</BodyText>
            </div>
          </section>

          <section>
            <Outlet />
          </section>

          <section>
            <h4 className="font-semibold capitalize text-lg mb-3">Documents</h4>

            <div className="grid grid-cols-3 gap-7 gap-y-5  w-full">
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
export default Mortgage;
