let id = 0;

export default (state = { movies: [] }, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      id++;
      const movie = Object.assign({}, action.movie, {id: id});
      return [...state, movie];
    default:
      return state;
  }
};
