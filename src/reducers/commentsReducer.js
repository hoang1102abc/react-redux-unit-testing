export default (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "FETCH_COMMENTS":
      const comments = action.payload.data.map(el => el.name);
      return [...state, ...comments];
    default:
      return state;
  }
};
