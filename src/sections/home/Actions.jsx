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
        <div className=" w-[95%] md:w-[75%] mx-auto flex flex-col gap-5 items-center justify-center">
          <Heading
            first="about"
            second="Ellington funds"
            size="text-[27px] md:text-[30px]"
          />
          <BodyText light={true} center={true} white={true}>
            Discover Ellington Funds: Your Gateway to Property Investment,
            Agriculture Funding, Crowdfunding for Real Estate, Restaurant
            Investment, Donation and Transportation Investment Opportunities all
            in one place.
          </BodyText>
          <Button name="learn more" light={true} route={`/services`} />
        </div>
      </CallToAction>
    </Container>
  );
};
export default Actions;
