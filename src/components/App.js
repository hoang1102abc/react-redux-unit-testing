import React from "react";
import { Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentsList from "./CommentsList";
import Navigation from "./Nav";

export default () => {
  return (
    <div>
      <Route path="/" component={Navigation} />

      <Route path="/" exact component={CommentsList} />
      <Route path="/post" exact component={CommentBox} />
    </div>
  );
};
