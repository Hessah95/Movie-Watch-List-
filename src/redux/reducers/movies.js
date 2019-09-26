import { GET_MOVIE, DELETE_MOVIE, STATUS } from "../actions/actionTypes";

const initialState = {
  movies: []
};

let movies = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      movies = state.movies.concat(action.payload);
      return {
        ...state,
        movies: movies
      };

    case DELETE_MOVIE:
      movies = state.movies.filter(item => item !== action.payload);
      return {
        ...state,
        movies: movies
      };

    case STATUS:
      movies = state.movies.filter(item => item !== action.payload);
      let filtered_movies = movies.concat({
        title: action.payload.title,
        status: !action.payload.status
      });
      return {
        ...state,
        movies: filtered_movies
      };

    default:
      return state;
  }
};
