import { SectionHero } from "../components/ui";
import { Main } from "../components/pageTemplate";
import { BodyText, CardHeader, HeaderBody } from "../components/text";
import { about } from "../assets/images/about";
import { Container } from "../layouts";

const heroText =
  "Lorem ipsum dolor sit amet consectetur. Sit sed massa tristique sapien magna convallis enim quam. Vitae auctor vestibulum viverra lobortis a habitant adipiscing. Molestie nulla feugiat euismod fermentum ipsum tortor pellentesque. Quis sagittis tempor facilisi nam.";

const About = () => {
  return (
    <Main>
      <SectionHero first={`About`} second={`Us`} text={heroText} />
      <Container>
        <section className="h-[70vh] rounded-xl overflow-hidden">
          <img src={about} className="w-full h-full object-cover" alt="" />
        </section>
        <main className="w-[40%] border mx-auto my-5">
          <h2 className="mb-5 leading-7 font-medium">
            Ellington Funds provides a full service range including Crowdfunding
            for real estate, agricultural investment, transportation investment,
            donations, restaurant investment, Property investment etc.
          </h2>
          <BodyText>
            Ellington Funds offers tailored property investment opportunities,
            whether you're looking to invest in residential, commercial, or
            industrial properties. Our team of experts will guide you through
            the process, ensuring you make informed decisions that align with
            your investment objectives.
          </BodyText>

          <CardHeader className={`my-5`} cardTitle={`Investments Plan`} />

          <BodyText className={`mb-5`}>
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </BodyText>

          <ul className="list list-disc list-inside">
            <div className="flex items-center gap-2">
              <svg
                width="7"
                height="7"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#1F26B7" />
              </svg>
              <BodyText className={` m-0`}>Digital Marketing</BodyText>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="7"
                height="7"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#1F26B7" />
              </svg>
              <BodyText className={` m-0`}>Effort Instead</BodyText>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="7"
                height="7"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#1F26B7" />
              </svg>
              <BodyText className={` m-0`}>Handling In house</BodyText>
            </div>

            <BodyText></BodyText>
          </ul>

          <BodyText>
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house. They can provide
            your business with a variety of digital solutions to promote your
            product or service online and help you.
          </BodyText>

          <CardHeader className={`my-5`} cardTitle={`Investments Benefits`} />

          <BodyText className={`mb-5`}>
            Put themselves in the merchant's shoes. It is meant to partner on
            the long run, and work as an extension of the merchant's team.
          </BodyText>

          <ol className="list list-inside list-decimal mb-5">
            <div className="flex items-center gap-2">
              <BodyText className={` m-0`}>Handling In house</BodyText>
            </div>
            <div className="flex items-center gap-2">
              <BodyText className={` m-0`}>instead of handling</BodyText>
            </div>
            <div className="flex items-center gap-2">
              <BodyText className={` m-0`}>in house</BodyText>
            </div>
          </ol>
          <BodyText>
            Agency is a business you hire to outsource your digital marketing
            efforts, instead of handling in-house. They can provide your
            business with a variety of digital solutions to promote your product
            or service online and help you.
          </BodyText>

          <CardHeader className={`my-5 mb-6`} cardTitle={`Mission Statement`} />
          <div className="flex items-start justify-center bg-[#212121] mt-5 gap-7 rounded-2xl pt-9 py-5 px-5 pr-8">
            <svg
              className=" -mt-5"
              width="70"
              height="60"
              viewBox="0 0 48 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 0C7.784 2.412 0 13.168 0 23.45C0 31.39 5.572 36 11.602 36C16.832 36 22 32.406 22 26.042C22 20.838 18.19 16.528 13.208 15.744C13.642 11.736 17.538 5.922 21.968 4.252L20 0ZM46 0C33.784 2.412 26 13.168 26 23.45C26 31.39 31.572 36 37.602 36C42.832 36 48 32.406 48 26.042C48 20.838 44.19 16.528 39.208 15.744C39.642 11.736 43.538 5.922 47.968 4.252L46 0Z"
                fill="#E1C16E"
              />
            </svg>
            <p className="text-white leading-6">
              Provide your business with a variety of digital solutions to
              promote your product or service online and help you.
            </p>
          </div>
        </main>
      </Container>
    </Main>
  );
};
export default About;
