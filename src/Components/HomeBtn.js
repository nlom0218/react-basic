import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  a {
    display: block;
    color: white;
    text-decoration: none;
    background-color: rgba(0, 128, 0, 0.8);
    padding: 10px 20px;
    border-radius: 10px;
    transition: background-color 0.4s ease;
    :hover {
      background-color: rgba(0, 128, 0, 1);
    }
  }
`;

const HomeBtn = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default HomeBtn;
