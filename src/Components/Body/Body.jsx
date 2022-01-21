import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SubNavbar from "../NavbarCategory/SubNavbar";
import Hero from "../HeroSection/Hero";
import { Wrapper } from "./style";
const Body = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Wrapper.Div>
        <SubNavbar />
        <Hero />
      </Wrapper.Div>
    </Wrapper>
  );
};

export default Body;
