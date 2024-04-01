import Container from "./Container";
import { useSelector } from "react-redux";
import { footerGreen, footerImgUp } from "../assets/images/general";
import { FooterBtn } from "../components/button";
import { FooterNavText, FooterSpan } from "../components/text";
import { logo } from "../assets/images/logo";
import { footerline, instagram, facebook, twitter } from "../assets/icons";
import { homeServices } from "../db/services/services";
import { Link } from "react-router-dom";

const Li = ({ children }) => {
  return (
    <li className="text-[10px] font-light font-inter text-white capitalize">
      {children}
    </li>
  );
};

const Footers = () => {
  const { nav } = useSelector((store) => store.nav);

  return (
    <div className="bg-[#212121]  py-16">
      <Container>
        <div className="flex justify-between flex-col md:flex-row">
          {/* For the logo on the left  */}
          <div className="w-60 flex mb-7 flex-col items-start justify-between">
            <img src={logo} alt="" className="mb-7 md:mb-10  h-12" />

            <div className="flex gap-4 items-center flex-col">
              <img src={footerline} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>

          {/* main right container */}
          <div className="flex gap-28 ">
            <div className="flex flex-col">
              <section className="flex  gap-16 mb-5">
                {/* services */}
                <div>
                  <FooterSpan className=" text-[10px]">Services</FooterSpan>
                  <ul className="mt-3">
                    {homeServices.map((each, index) => {
                      return (
                        <Link key={index} to={`/services/${each.id}`}>
                          <Li>{each.title}</Li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>

                {/* The second part */}
                <div>
                  <FooterSpan className="text-[10px]">
                    Ellington Funds
                  </FooterSpan>
                  <ul className="mt-3">
                    <Link to={`/`}>
                      <Li>Home</Li>
                    </Link>
                    <Link to={`/about`}>
                      <Li>About</Li>
                    </Link>
                    <Link to={`/contact`}>
                      <Li>contact</Li>
                    </Link>
                  </ul>
                </div>
              </section>

              <p className="text-[11px] font-inter  mx-0 text-white">
                Ellington funds a product of Charleston bank
                <br /> regulated by central bank
              </p>

              <span className="text-[9px]  font-inter text-white opacity-60">
                © Ellington Funds Ltd. All rights reserved
              </span>
            </div>

            <div className="flex flex-col justify-between ">
              <div className="">
                <FooterSpan className="text-[10px]">Contact</FooterSpan>
                <ul className="mt-3 -mb-0">
                  <Li>
                    <span className="text-[12px] pb-1 underline">
                      +234 (0) 818 587 0000
                    </span>
                  </Li>
                  <Li>hello@Ellington Funds.com</Li>
                </ul>

                <span className="text-[10px] -mt-3 text-[#EBA414]">
                  Contact us
                </span>
              </div>

              <div>
                <span className="text-[9px]  font-inter text-white opacity-60">
                  © 2023 — Copyright
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footers;

<div className="mt-20">
  <div className="flex gap-0 md:gap-[185px] items-center justify-between md:justify-end">
    <span className="text-[9px] md:text-sm font-inter text-footerDark-slightOff font-medium">
      © Ellington Funds Ltd. All rights reserved
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
</div>;
