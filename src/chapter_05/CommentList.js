import React from "react";
import Comment from "./Comment";

const commentList = [
  {
    username: "HD",
    content: "안녕, 리액트!",
  },
  {
    username: "KH",
    content: "Hello World!",
  },
  {
    username: "홍동",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    username: "경희",
    content: "겁나 TMI이네ㅡㅡ;v",
  },
];

const CommentList = () => {
  return (
    <div>
      <h1>Hello, Comment!</h1>
      {commentList.map((item, index) => {
        return <Comment key={index} {...item} />;
      })}
    </div>
  );
};

export default CommentList;
