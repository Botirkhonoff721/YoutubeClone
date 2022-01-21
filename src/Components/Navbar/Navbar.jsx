import React from "react";
import Logo from "../../Assets/YoutubeLOGO.svg";
import Box from "../../Assets/guide.svg";
import Search from "../../Assets/Lupa.svg";
import Camera from "../../Assets/camera.svg";
import Cubik from "../../Assets/left-topbar.png";
import Bell from "../../Assets/bell.svg";
import Avatar from "../../Assets/pp.svg";

import { Container, LogoPart, InputPart,RightPart } from "./style";

const Navbar = () => {
  return (
    <Container>
      <LogoPart>
        <LogoPart.Box src={Box} />
        <LogoPart.Logo>
          <LogoPart.LogoImg src={Logo} />
          <LogoPart.Youtube>Youtube</LogoPart.Youtube>
        </LogoPart.Logo>
      </LogoPart>
        <InputPart >
            <InputPart.Input />
            <InputPart.Searchbtn src={Search} />

        </InputPart>
        <RightPart>
                <RightPart.Camera src={Camera} />
                <RightPart.Cubik src={Cubik} />
                <RightPart.Bell src={Bell} />
                <RightPart.Avatar src={Avatar} />
        </RightPart>
    </Container>
  );
};

export default Navbar;
