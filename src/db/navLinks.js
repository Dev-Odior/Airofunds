export const navLinks = [
  { title: "Home", route: "/", active: true },
  { title: "about us", route: "/about-us", active: false },
  { title: "services", route: "/services", active: false },
  { title: "contact", route: "/contact", active: false },
];

export const nav = [
  {
    title: "home",
    mobile: true,
    route: "/",
  },

  {
    title: "services",
    icon: "bi bi-search",
    active: true,

    sub: [
      { title: "Property Investment", route: "/services/crowdfunding" },
      {
        title: "Agriculture Investment",
        route: "/services/agricultural-investment",
      },
      { title: "Project funding", route: "/services/project-funding" },
      { title: "Restaurant", route: "/services/restaurant" },
      {
        title: "Transportation",
        route: "/services/transportation",
      },
      { title: "Donations", route: "/technology/donations" },
      { title: "Donations", route: "/services/donations" },
      { title: "Mortgages", route: "/services/mortgages" },
    ],
  },
  {
    title: "about us",
    mobile: true,
    route: "/about-us",
  },
  {
    title: "contact",
    mobile: true,
    route: "/contact",
  },
  {
    title: "Terms of Service",
    mobile: true,
    route: "/terms",
  },
  {
    title: "Privacy Policy",
    mobile: true,
    route: "/privacy-policy",
  },
];
