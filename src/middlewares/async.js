export default ({ dispatch }) => next => action => {
  //if it's a pending promise, then
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(res => {
    dispatch({ ...action, payload: res });
  });
};
