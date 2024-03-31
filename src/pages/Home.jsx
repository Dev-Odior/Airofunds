import { Actions, Hero, ServicesSection } from "../sections/home";
import { FormComponent } from "../components/form";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ServicesSection />
      <Actions />
      <FormComponent />
    </div>
  );
};
export default Home;
