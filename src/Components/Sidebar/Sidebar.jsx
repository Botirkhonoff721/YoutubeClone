import React, { useContext } from "react";
import { SidebarList } from '../../Context/MenuList';
import { Container,List } from "./style";

const Sidebar = () => {
  const [data,setData] = useContext(SidebarList);
  console.log(data);
  return (
    <Container>

      {data.map((value) => (
        <div>
          <List>
          <List.Img src={value.img} />
          <List.Heading>{value.title}</List.Heading>
      </List>
        </div>
      ))}
    </Container>
  );
};

export default Sidebar;
