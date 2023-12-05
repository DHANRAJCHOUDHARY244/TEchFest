// Router.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Register from "../components/contact/Register";
import Error404 from '../components/error/404Error'
import RegCan from '../components/candidates/Portfolio'
import Loader from "../Loader";
import App from "../App";
const RouterComponent = () => {
  return (
    <Router>
    <Routes>
    <Route element={<Layout/>}>
        <Route exact path="/" element={<Loader><App/></Loader>} />
        <Route exact path="/register" element={<Loader><Register/></Loader>} />
        <Route exact path="/regCan" element={<Loader><RegCan/></Loader>} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </Router>
  );
};

export default RouterComponent;
