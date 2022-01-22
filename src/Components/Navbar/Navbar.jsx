import React from "react";
import Logo from "../../Assets/YoutubeLOGO.svg";
import Box from "../../Assets/guide.svg";
import Search from "../../Assets/Lupa.svg";
import Camera from "../../Assets/camera.svg";
import Cubik from "../../Assets/left-topbar.png";
import Bell from "../../Assets/bell.svg";
import Avatar from "../../Assets/pp.svg";
import { MoviesList } from "../../Context/Movies";
import { Container, LogoPart, InputPart,RightPart } from "./style";
import { useContext,useState } from "react/cjs/react.development";

const Navbar = () => {
   const [state, setstate] = useState('initialState')
   const [active, setActive] = useState(true)
  const [list,setList] = useContext(MoviesList)
console.log(list ,'list');
  const onChange=(e)=>{
    let res = list.filter((value)=>value.name.includes(e.target.value))
    console.log(e.target.value)
    setList(res)
  }
  const Hide=()=>{
    
  }
  return (
    <Container>
      <LogoPart>
        <LogoPart.Box src={Box} onClick={Hide} />
        <LogoPart.Logo>
          <LogoPart.LogoImg src={Logo} />
          <LogoPart.Youtube>Youtube</LogoPart.Youtube>
        </LogoPart.Logo>
      </LogoPart>
        <InputPart >
            <InputPart.Input onChange={onChange} />
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
