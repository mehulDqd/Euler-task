import React from "react";
import AppProvider, { AppContext } from "../Context";
import Home from "../Pages/Home/home";

const App = () => (
  <AppProvider>
    <Home />
  </AppProvider>
);

export default App;
