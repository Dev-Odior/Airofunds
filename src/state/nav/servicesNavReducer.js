import { createSlice } from "@reduxjs/toolkit";
import { nav, navLinks } from "../../db/navLinks";

const initialState = {
  nav,
  navLinks: navLinks,
  openNavModal: false,
  openSidebar: false,
  active: "",
};

const servicesNavSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {},
});

// export const {} =
//   servicesNavSlice.actions;
export default servicesNavSlice.reducer;
