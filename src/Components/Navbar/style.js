import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  height: 56px;
  background: #212121;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid wheat;
`;

export const LogoPart = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
LogoPart.Box = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
    :hover {
      background-color: rgba(255,255,255,0.3);

  }
`;

LogoPart.Logo = styled.div`
  display: flex;
  align-items: center;
`;
LogoPart.LogoImg = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 2.5px;
`;
LogoPart.Youtube = styled.h2`
  color: rgba(255, 255, 255, 1);
`;

export const InputPart = styled.div`
  display: flex;
  align-items: center;
`;
InputPart.Input = styled.input`
  width: 574px;
  height: 32px;
  background: rgba(0, 0, 0, 1);
  color: #555555;
  outline: none;
  margin-right: 6px;
  font-size: 18px;
`;

InputPart.Searchbtn = styled.img`
  padding: 7px 18px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  :hover {
      background: rgba(255, 255, 255, 0.3);
      
  }
  :active {
      background: rgba(255, 255, 255, 0.1);
      
  }
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
  width: 184px;
  height: 40px;
  padding: 8px;
  justify-content: space-between;
`;

RightPart.Camera = styled.img`
    cursor: pointer;
`;
RightPart.Cubik = styled.img`
    cursor: pointer;

`;
RightPart.Bell = styled.img`
    cursor: pointer;

`;
RightPart.Avatar = styled.img`
    cursor: pointer;

`;