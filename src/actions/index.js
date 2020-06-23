import axios from "axios";

export const addComment = comment => {
  return {
    type: "ADD_COMMENT",
    payload: comment
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: "FETCH_COMMENTS",
    payload: response
  };
};

export const signIn = () => {
  return {
    type: "SIGN_IN"
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
