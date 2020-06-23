import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) => next => action => {
  next(action);

  const commentList = getState();

  let valid = tv4.validate(commentList, stateSchema);

  if (valid) {
    console.log("state is in correct data format");
  } else {
    console.log(tv4.error);
  }
};
