import React from "react";
import './Comment.css';

function Comment(props) {
  return (
    <div className="commentCard card">
      <div className="commentBody">{props.comment.postText}</div>
      <div className="footer">
        <div className="username">from: {props.comment.user.username}</div>
        <div className="postDate">date: {props.comment.postDate}</div>
      </div>
    </div>
  );
}

export default Comment;
