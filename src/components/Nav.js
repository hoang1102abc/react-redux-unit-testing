import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Navigation extends React.Component {
  renderButton() {
    if (this.props.auth) {
      return <button onClick={this.props.signOut}>Sign out</button>;
    } else {
      return <button onClick={this.props.signIn}>Sign In</button>;
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, actions)(Navigation);
