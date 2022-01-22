import styled from "styled-components";

export const Container = styled.div`
  min-width: 243px;
  height: 100vh;
  background: #212121;
  border-right: 1px solid wheat;
  `;

export const List = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 24px;
  :hover {
    opacity: 0.6;
    background-color: rgba(255,255,255,0.3);
  }
`;

List.Img = styled.img`
  margin: 0;
  display: block;
  margin-right: 24px;
`;
List.Heading = styled.h4`
  color: #fff;
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
