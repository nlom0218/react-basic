import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  a {
    display: block;
  }
`;

const Home = () => {
  return (
    <Container>
      <Link to="/clock">chapter_4 Clock</Link>
      <Link to="/comment">chapter_5 Comment</Link>
    </Container>
  );
};

export default Home;
