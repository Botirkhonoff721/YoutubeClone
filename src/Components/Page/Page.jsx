import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import { Container } from "./style";

const Page = () => {
  return (
      <Container>
        <Navbar />
        <Body />
      </Container>
  );
};

export default Page;
