import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  min-width: 480px;
  max-width: 480px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(100, 100, 100, 0.2);
  display: flex;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const Avatar = styled.div`
  align-self: flex-start;
  min-width: 40px;
  height: 40px;
  background-color: rgba(160, 160, 160);
  border-radius: 50%;
  margin-right: 20px;
`;

const Username = styled.div`
  font-weight: 700;
  color: rgba(60, 60, 60);
  margin: 5px 0px;
`;

const Content = styled.div`
  font-size: 14px;
`;

const Comment = ({ username, content }) => {
  return (
    <Container>
      <Avatar></Avatar>
      <div>
        <Username>{username}</Username>
        <Content>{content}</Content>
      </div>
    </Container>
  );
};

export default Comment;
