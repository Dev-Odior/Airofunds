import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navItems: [
    {
      header: "Composable",
      active: false,
      content: {
        title: "Lending Engine",
        content:
          "With Airoplays cloud-native lending engine, banks, fintechs retailers, corporate, and other businesses may create a range of loan products that are customized to meet the demands of their clients. SME loans, buy now pay later, mortgages, embedded finance, and purchase financing are all examples.",
      },
    },
    {
      header: "lending",
      active: true,
      content: {
        title: "Lending Engine",
        content:
          "With Airoplays cloud-native lending engine, banks, fintechs retailers, corporate, and other businesses may create a range of loan products that are customized to meet the demands of their clients. SME loans, buy now pay later, mortgages, embedded finance, and purchase financing are all examples.",
      },
    },
    {
      header: "deposit",
      active: false,
      content: {
        title: "Lending Engine",
        content:
          "With Airoplays cloud-native lending engine, banks, fintechs retailers, corporate, and other businesses may create a range of loan products that are customized to meet the demands of their clients. SME loans, buy now pay later, mortgages, embedded finance, and purchase financing are all examples.",
      },
    },
  ],
};

const productsNavSlice = createSlice({
  name: "productsBenefits",
  initialState,
  reducers: {},
});

export default productsNavSlice.reducer;
