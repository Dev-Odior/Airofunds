import Container from "./Container";
import { useSelector } from "react-redux";
import { footerLogo, footerGreen, footerImgUp } from "../assets/images/general";
import { FooterBtn } from "../components/button";
import { FooterNavText, FooterSpan } from "../components/text";

const Footers = () => {
  const { nav } = useSelector((store) => store.nav);

  return (
    <div className="bg-[#212121] pt-10 pb-4">
      <Container>
        <div className="flex justify-between flex-col md:flex-row">
          {/* For the logo and links  */}
          <div className="w-60 flex mb-7 flex-col items-start">
            <img src={footerLogo} alt="" className="mb-7 md:mb-3  h-12" />
            <div className="flex flex-wrap">
              {nav.map((each, index) => {
                return <FooterNavText key={index} {...each} />;
              })}
            </div>
          </div>

          {/* For the contact information */}
          <div className=" flex flex-col md:flex-row gap-10 md:gap-36   md:items-center font-bricolage">
            <div className="flex  flex-col gap-8">
              {/* Phone */}
              <div className="flex flex-col">
                <FooterSpan className="mb-2">Contact Us</FooterSpan>

                {/* Number */}
                <div className="flex  items-center text-2xl gap-1">
                  <FooterSpan font="2xl" noMb={true}>
                    (
                  </FooterSpan>
                  <span className="text-white">+971 45 772 687</span>
                  <FooterSpan font="2xl" noMb={true}>
                    )
                  </FooterSpan>
                </div>
              </div>

              {/* <div className="flex flex-col">
                <FooterSpan className="mb-2">Location</FooterSpan>
                <span className="text-[11px] text-[#ADB3AB]">
                  4517 Washington Ave. Manchester,
                  <br /> Kentucky 39495
                </span>
              </div> */}

              {/* days of the week */}
              <div className="flex flex-col">
                <FooterSpan className="mb-2">Mo-Fr</FooterSpan>
                <span className="text-[#ADB3AB] text-xl">9am—6pm</span>
              </div>
            </div>

            <div className="flex flex-col">
              <FooterSpan className="mb-2">Email</FooterSpan>
              <span className="text-[11px] text-[#ADB3AB]">
                support@airopay.com
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex gap-0 md:gap-[185px] items-center justify-between md:justify-end">
            <span className="text-[9px] md:text-sm font-inter text-footerDark-slightOff font-medium">
              © Airopay Ltd. All rights reserved
            </span>
            <FooterBtn className="mb-3" />
          </div>
          <div className="relative  overflow-hidden h-28 bg-black rounded-xl w-full border-white">
            {/* The image green */}
            <img
              className="absolute h-full w-full object-cover top-0 right-0"
              src={footerGreen}
            ></img>

            {/* Explore our success */}
            <div className="absolute ml-10 h-full flex flex-col justify-center  text-[11px] text-[#ADB3AB]">
              <span className="capitalize block ">Explore</span>
              <span>our success</span>
            </div>

            {/* The arrow img */}
            <img className="absolute right-0 h-full" src={footerImgUp} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footers;
