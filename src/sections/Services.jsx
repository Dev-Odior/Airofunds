import { Container } from "../layouts";
import { HeaderBody } from "../components/text";
import { ThreeCol } from "../layouts/grid";
import { homeServices } from "../db/services";
import { StyleOne } from "../components/card";
import { Button } from "../components/button";

const text =
  "Lorem ipsum dolor sit amet consectetur. Sit sed massa tristique sapien magna convallis enim quam. Vitae auctor vestibulum viverra lobortis a habitant adipiscing. Molestie nulla feugiat euismod fermentum ipsum tortor pellentesque. Quis sagittis tempor facilisi nam.";

const Services = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-5 my-16">
        <HeaderBody first={`our`} second={"services"} dark={true} text={text} />
        <ThreeCol>
          {homeServices.map((service, index) => {
            return (
              <StyleOne
                key={index}
                title={service.title}
                desc={service.desc}
                img={service.img}
                two={true}
              />
            );
          })}
        </ThreeCol>

        <Button name={`Learn More`} />
      </div>
    </Container>
  );
};
export default Services;
