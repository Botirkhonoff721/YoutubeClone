import React from "react";
import Page from "../Components/Page/Page";
import MenuList from "../Context/MenuList";
import Movies from "../Context/Movies";
const Root = () => {
  return (
    <Movies>
      <MenuList>
        <Page />
      </MenuList>
    </Movies>
  );
};

export default Root;
