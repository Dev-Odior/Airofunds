import { SectionHero } from "../components/ui";
import { Main } from "../components/pageTemplate";

const heroText =
  "Lorem ipsum dolor sit amet consectetur. Sit sed massa tristique sapien magna convallis enim quam. Vitae auctor vestibulum viverra lobortis a habitant adipiscing. Molestie nulla feugiat euismod fermentum ipsum tortor pellentesque. Quis sagittis tempor facilisi nam.";

const About = () => {
  return (
    <Main>
      <SectionHero first={`About`} second={`Us`} text={heroText} />
    </Main>
  );
};
export default About;
