import { Container } from "../../layouts";
import { HeaderBody } from "../../components/text";
import { ThreeCol } from "../../layouts/grid";
import { StyleOne } from "../../components/card";
import { Button } from "../../components/button";
import { useSelector } from "react-redux";

const ServicesSection = () => {
  const { home, info } = useSelector((store) => store.services);
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-5  my-8 md:my-16">
        <HeaderBody first={`our`} second={"services"} dark={true} text={info} />
        <ThreeCol>
          {home.map((service, index) => {
            if (!service.ignore) {
              return (
                <StyleOne
                  key={index}
                  title={service.title}
                  desc={service.desc}
                  img={service.img}
                  two={true}
                />
              );
            }
          })}
        </ThreeCol>

        <Button name={`Learn More`} route={"/services"} />
      </div>
    </Container>
  );
};
export default ServicesSection;
