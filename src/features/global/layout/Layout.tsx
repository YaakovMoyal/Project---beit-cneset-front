import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container_flex } from "../style/Container_flex.styled";

const Layout = () => {
  return (
    <Container_flex>
      <Header />
      <Outlet />
      <Footer />
    </Container_flex>
  );
};

export default Layout;
