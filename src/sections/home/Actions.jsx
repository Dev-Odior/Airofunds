import { Container } from "../../layouts";
import CallToAction from "../../components/ui/CallToAction";
import { Heading } from "../../components/text";
import { Button } from "../../components/button";
import { homecta } from "../../assets/images/home";
import { BodyText } from "../../components/text";

const Actions = () => {
  return (
    <Container>
      <CallToAction customImg={homecta}>
        <div className="w-[75%] mx-auto flex flex-col gap-5 items-center justify-center">
          <Heading first="about" second="Ellington funds" size="text-[30px]" />
          <BodyText light={true} center={true} white={true}>
            Lorem ipsum dolor sit amet consectetur. Sit sed massa tristique
            sapien magna convallis enim quam. Vitae auctor vestibulum viverra
            lobortis a habitant adipiscing. Molestie nulla feugiat euismod
            fermentum ipsum tortor pellentesque. Quis sagittis tempor facilisi
            nam. Lorem ipsum dolor sit amet consectetur. Sit sed massa tristique
            sapien magna convallis enim quam.
          </BodyText>
          <Button name="learn more" light={true} />
        </div>
      </CallToAction>
    </Container>
  );
};
export default Actions;
