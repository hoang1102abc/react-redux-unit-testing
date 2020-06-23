import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";

class CommentBox extends React.Component {
  state = { comment: "" };

  onSubmit = () => {
    this.props.addComment(this.state.comment);

    this.setState({ comment: "" });
  };

  fetchComments = () => {
    this.props.fetchComments();
  };
  render() {
    return (
      <div>
        <h2>Enter a comment</h2>
        <textarea
          value={this.state.comment}
          onChange={event => this.setState({ comment: event.target.value })}
        />
        <div>
          <button id="submit" onClick={this.onSubmit}>
            Submit
          </button>
          <button onClick={this.fetchComments}>Fetch Comments</button>
        </div>
      </div>
    );
  }
}

const Wrapped = connect(null, actions)(CommentBox);

export default requireAuth(Wrapped);
