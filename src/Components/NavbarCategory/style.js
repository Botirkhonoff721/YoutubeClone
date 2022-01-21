import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 56px;
  border: 1px solid wheat;
  padding: 0 152px;
  display: flex;
  align-items: center;
  
  `;
export const Categories = styled.div`
  display: flex;
  row-gap: 6px;
  max-width: 100%;


`;

Categories.Type = styled.h3`
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: max-content;
  margin-right: 12px;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: black;
  }
`;
