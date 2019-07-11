import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        auther="Abdo"
        date="today at 4:00 PM"
        body="nice day"
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        auther="5alty"
        date="today at 3:00 PM"
        body="hi there"
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        auther="cotonily"
        date="yesterday at 4:54 PM"
        body="thank you"
        avatar={Faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("div"));
