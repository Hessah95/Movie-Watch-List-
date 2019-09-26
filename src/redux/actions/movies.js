import { GET_MOVIE, DELETE_MOVIE, STATUS } from "./actionTypes";

export const getMovie = movie => {
  return {
    type: GET_MOVIE,
    payload: movie
  };
};

export const deleteMovie = movie => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  };
};

export const status = movie => {
  return {
    type: STATUS,
    payload: movie
  };
};
