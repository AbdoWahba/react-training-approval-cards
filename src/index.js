import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>are you sure ?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          auther="Abdo"
          date="today at 4:00 PM"
          body="nice day"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          auther="Ahmed"
          date="today at 3:00 PM"
          body="hi there"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          auther="Hussien"
          date="yesterday at 4:54 PM"
          body="thank you"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("div"));
