import { createSlice } from "@reduxjs/toolkit";
import { homeServices, servicesNav, text } from "../../db/services/services";

import { servicesProductContent } from "../../db/services/content";

const initialState = {
  home: homeServices,
  nav: [...servicesNav],
  info: text,
  productContent: servicesProductContent,
  singleProductPage: { title: "", desc: "", products: [] },
  productInfo: {},
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    serviceActiveNav: (state, action) => {
      const id = action.payload;
      const active = state.nav.map((each) => {
        if (each.id === id) {
          return { ...each, active: true };
        } else {
          return { ...each, active: false };
        }
      });

      const product = state.productContent.find((each) => {
        return each.id === id;
      });

      state.nav = active;
      state.singleProductPage = product;
    },
    moreInfoHandler: (state, action) => {
      const name = action.payload;

      const single = state.singleProductPage.products.find((item) => {
        return item.title.toLowerCase() === name;
      });

      console.log(single);
      state.productInfo = single;
    },
  },
});

export default servicesSlice.reducer;
export const { serviceActiveNav, moreInfoHandler } = servicesSlice.actions;
