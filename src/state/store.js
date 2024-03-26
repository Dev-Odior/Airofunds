import { configureStore } from "@reduxjs/toolkit";

import btnReducer from "./buttonReducer/btnReducer";
import productsNavReducer from "./productNav/productsReducer";
import navReducer from "./nav/navReducer";
import modalsReducer from "./modals/modalsReducer";

const store = configureStore({
  reducer: {
    buttons: btnReducer,
    productsBenefits: productsNavReducer,
    nav: navReducer,
    modals: modalsReducer,
  },
});

export default store;
