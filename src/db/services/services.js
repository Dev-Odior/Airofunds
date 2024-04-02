import {
  agriculture,
  project,
  property,
  restaurant,
  transportation,
  donation,
} from "../../assets/images/services/home";

import {
  agricLg,
  donationLg,
  mortgageLg,
  projectLg,
  propertyLg,
  restaurantLg,
  transportationLg,
} from "../../assets/images/services/main";

export const homeServices = [
  {
    img: property,
    id: "crowdfunding",
    largeImg: propertyLg,
    title: "Property Investment",
    desc: "Ellington funds offers tailored property investment opportunities, whether you're looking to invest in residential commercial, or industrial properties. Our team of experts will guide you through the process, ensuring you make informed decisions that align with your investment objectives.",
  },
  {
    img: agriculture,
    largeImg: agricLg,
    id: "agricultural-investment",
    title: "Agriculture Investment",
    desc: "We believe in the potential of agriculture to drive sustainable development. Ellington funds provides investment options in agriculture, supporting farmers and agribusinesses while delivering attractive returns to our investors.",
  },
  {
    img: project,
    largeImg: projectLg,
    title: "Project funding",
    id: "project-funding",
    desc: "Are you looking to raise capital for your project? Ellington funds offers fundraising solutions for businesses and individuals, connecting you with potential investors who share your vision.",
  },
  {
    img: restaurant,
    largeImg: restaurantLg,
    id: "restaurant",
    title: "Restaurant",
    desc: "Ellington funds supports the restaurant industry by providing financing options for restaurant owners and investors. Whether you're looking to expand your existing restaurant or start a new venture, we're here to help.",
  },
  {
    img: transportation,
    largeImg: transportationLg,
    id: "transportation",
    title: "Transportation",
    desc: "Our transportation investment opportunities cater to the growing demand for efficient and sustainable transportation solutions. Partner with Ellington funds to invest in the future of transportation.",
  },
  {
    img: donation,
    largeImg: donationLg,
    id: "donations",
    title: "donation",
    desc: "Ellington funds believes in giving back to the community. Through our donation platform, individuals and businesses can contribute to charitable causes that make a difference in people's lives.",
  },
  {
    ignore: true,
    img: donation,
    largeImg: mortgageLg,
    title: "Mortgage Investment",
    id: "mortgages",
    desc: "Our mortgage investment opportunities cater to the growing demand for efficient and sustainable housing solutions. Partner with Ellington funds to invest in the future of mortgage.",
  },
];

export const servicesNav = [
  {
    name: "Crowdfunding For Real Estate",
    id: "crowdfunding",
    active: true,
  },
  {
    name: "agricultural investment",
    id: "agricultural-investment",
    active: false,
  },
  {
    name: "project funding",
    active: false,
    id: "project-funding",
  },
  {
    name: "restaurant",
    active: false,
    id: "restaurant",
  },
  {
    name: "transportation",
    active: false,
    id: "transportation",
  },
  { name: "donations", active: false, id: "donations" },
  { name: "mortgages", active: false, id: "mortgages" },
];

export const text = `Discover Ellington Funds: Your Gateway to Property investment, Agriculture, Funding, Crowdfunding for real estate, Restaurant investment, donation, and Transportation Investment Opportunities, all in one place.`;
