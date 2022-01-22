import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  overflow-y: scroll;
  background-color: #222222;


`;
export const Content = styled.div`
  min-width: 332px;
  height: 283px;
  display: flex;
  flex-direction: column;
  flex: 2;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
`;
Content.MovieImg = styled.img`
  width: 100%;
`;
Content.Wrapper = styled.div`
  display: flex;
  width: 332px;
  height: 84px;
  padding-top: 12px;
`;
Content.UserImg = styled.img`
  display: block;
`;
Content.Title = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 4px;
`;
Content.ChannelName = styled.h2`
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
`;
Content.Viewed = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 8px;
`;
Content.Time = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
`;
Content.WordsWrapper = styled.div`
  margin-left: 12px;
`;
Content.NumbersWrapper = styled.div`
  display: flex;
`;
