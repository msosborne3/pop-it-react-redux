let id = 0;

export default (state = { movies: [] }, action) => {
  switch (action.type) {
    case 'ADD_SHOW':
      id++;
      const show = Object.assign({}, action.show, {id: id});
      return [...state, show];
    default:
      return state;
  }
};
