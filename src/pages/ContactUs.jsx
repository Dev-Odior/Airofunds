import { FormComponent } from "../components/form";
import { Main } from "../components/pageTemplate";
import { SectionHero } from "../components/ui";

const ContactUs = () => {
  return (
    <Main hide={true}>
      <SectionHero first={`Contact`} second={`Us`} text="Send us a message" />
      <FormComponent />
    </Main>
  );
};
export default ContactUs;
