import React, { useContext } from "react";
import { Container, Content } from "./style";
import { MoviesList } from "../../Context/Movies";

const Hero = () => {
  const [info, setInfo] = useContext(MoviesList);
  console.log(info);
  return (
    <Container>
      {info.map(({ id, name, avatar, viewed, time, user, channelName }) => (
        <Content key={id}>
          <Content.MovieImg src={avatar} alt="" />
          <Content.Wrapper>
            <Content.UserImg src={user} alt="" width="36px" height="36px" />
            <Content.WordsWrapper>
              <div>
                <Content.Title>{name} </Content.Title>
                <Content.ChannelName>{channelName}</Content.ChannelName>
              </div>
              <Content.NumbersWrapper>
                <Content.Viewed> {viewed} views </Content.Viewed>
                <Content.Time>{time} </Content.Time>
              </Content.NumbersWrapper>
            </Content.WordsWrapper>
          </Content.Wrapper>
        </Content>
      ))}
    </Container>
  );
};

export default Hero;
