import React from "react";
import { Container, Categories } from "./style";
import { Category } from "./CategoryData";
const SubNavbar = () => {
  return (
    <Container>
      <Categories >
        {Category.map(({ id, title }) => (
          <Categories.Type key={id}>{title}</Categories.Type>
        ))}
      </Categories>
    </Container>
  );
};

export default SubNavbar;
