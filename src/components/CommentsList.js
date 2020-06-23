import React from "react";
import { connect } from "react-redux";

class CommentsList extends React.Component {
  renderList() {
    const { list } = this.props;

    if (list.length !== 0) {
      return list.map((comment, index) => {
        return <li key={index}>{comment}</li>;
      });
    } else {
      return <span>There's no comments now!</span>;
    }
  }
  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

const mapStateToProps = ({ list }) => {
  return { list };
};
export default connect(mapStateToProps)(CommentsList);
