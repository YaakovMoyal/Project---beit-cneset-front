import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routesModel";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/Layout";
import AboutPage from "../pages/AboutPage";
import AllBeitCnesetPage from "../../beitCneset/pages/AllBeitCnesetPage";
import BeitCnesetDetailsPage from "../../beitCneset/pages/BeitCnesetDetailsPage";
import SignUpPage from "../../users/pages/signupPage";
import LoginPage from "../../users/pages/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route path={ROUTES.beitCneset} element={<BeitCnesetDetailsPage />} />
        <Route path={ROUTES.allBeitCneset} element={<AllBeitCnesetPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
      </Route>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.sign_up} element={<SignUpPage />} />
      <Route path={ROUTES.error} element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
