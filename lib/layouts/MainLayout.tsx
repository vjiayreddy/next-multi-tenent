import React, { Fragment } from "react";
import NavigationComponent from "../components/navigation";
import Footer from "../components/footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
      <NavigationComponent />
      <main>{children}</main>
      <Footer/>
    </Fragment>
  );
};

export default MainLayout;
