import React from "react";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

export default function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="postcontent">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}
