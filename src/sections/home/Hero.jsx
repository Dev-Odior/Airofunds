import { Container } from "../../layouts";
import { motion } from "framer-motion";
// import { bg } from "../../assets/images/bg/bg.jpeg";
import { google, apple } from "../../assets/images/actionBtn";
import { servicesNav } from "../../db/services/services";
import { useState, useEffect } from "react";
import {
  project,
  agriculture,
  restaurant,
  transportation,
  crowdfunding,
} from "../../assets/images/bg";

const ImageLooper = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="border  flex flex-no-wrap overflow-hidden">
      {images.map((image, index) => {
        const bgIndex = (index + currentIndex) % images.length;
        const style = {
          backgroundImage: `url(${images[bgIndex].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };

        return (
          <div
            key={index}
            style={style}
            className="flex-shrink-0 w-[10rem] h-[200px] m-5 rounded-lg"
          ></div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  // const bg = [project, agriculture, restaurant, transportation, crowdfunding];

  const [index, setIndex] = useState(0);

  const bg = [
    {
      name: "Crowdfunding For Real Estate",
      id: "crowdfunding",
      active: true,
      img: crowdfunding,
    },
    {
      name: "agricultural investment",
      id: "agricultural-investment",
      active: false,
      img: agriculture,
    },
    {
      name: "project funding",
      active: false,
      id: "project-funding",
      img: project,
    },
    {
      name: "restaurant",
      active: false,
      id: "restaurant",
      img: restaurant,
    },
    {
      name: "transportation",
      active: false,
      id: "transportation",
      img: transportation,
    },
    // { name: "donations", active: false, id: "donations" },
    // { name: "mortgages", active: false, id: "mortgages" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bg.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    // <main className=" bg-black">
    //   <Container>This is working</Container>
    // </main>

    <main
      className="relative h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${bg[index].img})` }}
    >
      {/* Black overlay covering half of the width */}
      <div className="absolute inset-y-0 left-0 bg-black opacity-70 w-1/2"></div>

      {/* Content container */}

      <Container className="h-full  grid grid-cols-2">
        <div className=" z-30 self-center px-5 font-poppins text-white  mt-8">
          <div className="w-[50%] mb-4">
            <div className="glass  border-2 py-3 text-center rounded-lg uppercase transition-all duration-1000 text-[11px]">
              {bg[index].name}
            </div>
          </div>

          <h1 className="text-[2.5rem] leading-[3rem] font-semibold  capitalize ">
            Your Trusted Partner for Innovative{" "}
            <span className="text-[#FFBD00]">Investments</span> and{" "}
            <span className="text-[#FFBD00]">Fundraising</span>
          </h1>

          <p className=" my-7 text-white font-poppins text-sm">
            Empowering Your Financial Goals Across Industries
          </p>

          <div className="flex gap-5">
            <img src={google} alt="" className="h-11" />
            <img src={apple} alt="" className="h-11" />
          </div>
        </div>

        <div className="self-end">
          <ImageLooper images={bg} />
        </div>
      </Container>
    </main>
  );
};
export default Hero;
