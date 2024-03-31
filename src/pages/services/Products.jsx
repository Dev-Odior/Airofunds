import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceActiveNav } from "../../state/servicesReducer/servicesReducer";
import { Main } from "../../components/pageTemplate";
import { Container } from "../../layouts";
import { BodyText } from "../../components/text";
import { ThreeCol } from "../../layouts/grid";
import { ProductCard } from "../../components/card";

const Products = () => {
  const dispatch = useDispatch();
  const { nav, singleProductPage } = useSelector((store) => store.services);

  const { products } = useParams();

  useEffect(() => {
    dispatch(serviceActiveNav(products));
  }, []);

  window.onload = function () {
    dispatch(serviceActiveNav(products));
  };

  return (
    <Main hide={true}>
      <Container>
        <h2 className="font-semibold text-2xl mb-5 text-[#262629]">
          {singleProductPage?.title}
        </h2>
        <BodyText>{singleProductPage?.desc}</BodyText>
        <ThreeCol gap="gap-6">
          {singleProductPage?.products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                img={product?.img}
                title={product?.title}
                info={product?.info}
                productId={product?.id}
                financials={product?.financials}
                text={product?.text}
              />
            );
          })}
        </ThreeCol>
      </Container>
    </Main>
  );
};
export default Products;
