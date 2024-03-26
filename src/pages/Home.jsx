import { Actions, Hero, Services } from "../sections/home";
import CallToAction from "../components/ui/CallToAction";
import { Container } from "../layouts";
import { homecta } from "../assets/images/home";
import { BodyText, FormInput, Heading } from "../components/text";
import { Button } from "../components/button";
import { formimg } from "../assets/images/form";
import { FormComponent } from "../components/form";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Actions />
      <FormComponent />
    </div>
  );
};
export default Home;
