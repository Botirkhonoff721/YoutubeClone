import React,{useContext} from "react";
import { Container, Categories } from "./style";
import { Category } from "./CategoryData";
import { MoviesList } from "../../Context/Movies";

const SubNavbar = () => {
  const [data,setData] = useContext(MoviesList)
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
