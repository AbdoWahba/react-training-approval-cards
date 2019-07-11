import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail auther="Abdo" />
      <CommentDetail auther="5alty" />
      <CommentDetail auther="cotonily" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("div"));
