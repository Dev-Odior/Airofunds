import { Container } from "../../layouts";
import { Heading, BodyText } from "../text";

const Page = () => {
  return (
    <main className="mt-16">
      <section className="bg-[#212121] w-full py-12 mb-10">
        <Container>
          <div className="flex gap-5 flex-col">
            <div className="w-[75%] text-center flex flex-col gap-5 align-center justify-center mx-auto">
              <Heading first={`About`} second={`Us`} />
              <BodyText light={true} center={true}>
                Lorem ipsum dolor sit amet consectetur. Sit sed massa tristique
                sapien magna convallis enim quam. Vitae auctor vestibulum
                viverra lobortis a habitant adipiscing. Molestie nulla feugiat
                euismod fermentum ipsum tortor pellentesque. Quis sagittis
                tempor facilisi nam.
              </BodyText>
            </div>
            {children}
          </div>
        </Container>
      </section>
    </main>
  );
};
export default Page;
