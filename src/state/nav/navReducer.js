import { createSlice } from "@reduxjs/toolkit";
import { nav, navLinks } from "../../db/navLinks";
// import { productInfoContent } from "../../db/content";
const initialState = {
  nav,
  navLinks: navLinks,
  openNavModal: false,
  openSidebar: false,
  active: "",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleModal: (state, _) => {
      state.openNavModal = !state.openNavModal;
    },
    toggleSidebar: (state, _) => {
      state.openSidebar = !state.openSidebar;
    },
    populateNavLInks: (state, action) => {
      const title = action.payload;
      state.nav = state.nav.map((link) => {
        if (title === link.title) {
          return { ...link, active: true };
        } else {
          return { ...link, active: false };
        }
      });
      const findLinks = state.nav.find((links) => {
        return links.title === title;
      });

      state.navLinks = findLinks.sub;
    },
    toggleWidget: (state, action) => {
      const title = action.payload;
      state.productNav = state.productNav.map((item) => {
        if (title === item.title) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
    },
  },
});

export const { toggleModal, populateNavLInks, toggleSidebar, toggleWidget } =
  navSlice.actions;
export default navSlice.reducer;
