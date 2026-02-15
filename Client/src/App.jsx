import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Registration from "./pages/Registration";
import Layout from "./components/Layout/Index";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
