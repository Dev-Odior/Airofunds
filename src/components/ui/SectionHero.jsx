import { Container } from "../../layouts";
import { Heading, BodyText } from "../text";

const SectionHero = ({ children, text, first, second, size }) => {
  return (
    <section className="bg-[#212121] w-full pt-12 pb-14 mb-10">
      <Container>
        <div className="flex gap-5 flex-col">
          <div className="w-[75%] text-center flex flex-col gap-5 align-center justify-center mx-auto">
            <Heading first={first} second={second} />
            <BodyText light={true} center={true}>
              {text}
            </BodyText>
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
};
export default SectionHero;
