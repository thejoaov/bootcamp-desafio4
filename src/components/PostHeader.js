import React from "react";

export default function PostHeader({ author, date }) {
  return (
    <div className="postheader">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
