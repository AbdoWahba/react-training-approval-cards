import React from "react";
import Faker from "faker";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={Faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="auther">
          {props.auther}
        </a>
        <div className="metadata">
          <span className="date">today at 6:00PM</span>
        </div>
        <div className="text">hey there</div>
      </div>
    </div>
  );
};

export default CommentDetail;
