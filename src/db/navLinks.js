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
      {
        title: "technology",
        sub: [
          { title: "Our platform", route: "/technology/ourplatform" },
          { title: "Composable approach", route: "/technology/composability" },
          { title: "Multi-cloud approach", route: "/technology/multicloud" },
          { title: "Process orchestration", route: "/technology/process" },
          {
            title: "Configuration as code",
            route: "/technology/configuration",
          },
          { title: "Security and compliance", route: "/technology/security" },
        ],
      },
      {
        title: "services",
        sub: [
          { title: "enablement", route: "/technology/enablement" },
          { title: "advisory", route: "/technology/advisory" },
        ],
      },
      {
        title: "ecosystem",
        sub: [{ title: "developer", route: "/technology/devs" }],
      },
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
