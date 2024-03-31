import { Main } from "../../components/pageTemplate";
import { SectionHero } from "../../components/ui";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { Container } from "../../layouts";
import Slider from "../../utils/swipper/Slider";
import { SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { serviceActiveNav } from "../../state/servicesReducer/servicesReducer";
import { useEffect } from "react";

const ServicesNav = () => {
  const { nav } = useSelector((store) => store.services);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    dispatch(serviceActiveNav(id));
    navigate(`/services/${id}`);
  };

  return (
    <div className="-mt-3">
      <Slider>
        {nav?.map((each, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                onClick={() => onClickHandler(each.id)}
                className={`${
                  each.active && "glass"
                } rounded-md flex py-3 px-2 items-center justify-center cursor-pointer`}
              >
                <span
                  className={`${
                    !each.active ? "text-white text-opacity-55" : "text-white"
                  } uppercase text-[11px]`}
                >
                  {each.name}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
};

const Services = () => {
  const { products } = useParams();
  const { info } = useSelector((store) => store.services);
  return (
    <Main>
      <SectionHero first={`Our`} second={`Services`} text={info}>
        {products && <ServicesNav />}
      </SectionHero>
      <Container>
        <Outlet />
      </Container>
    </Main>
  );
};
export default Services;
