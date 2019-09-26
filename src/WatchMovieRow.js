import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie, deleteMovie, status } from "./redux/actions/index";

class WatchMovieRow extends Component {
  render() {
    // const movie = this.props.movie;
    // const movieName = `${movie.movie_name}`;
    return (
      <tr>
        {/* <h2>Movie naMe</h2> */}
        <td>{this.props.movie.title}</td>
        <td>
          <button
            className="btn"
            onClick={() => this.props.status(this.props.movie)}
          >
            Switch
          </button>
        </td>
        <td>
          <button
            className="btn"
            onClick={() => this.props.deleteMovie(this.props.movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: movieID => dispatch(deleteMovie(movieID)),
    status: movieID => dispatch(status(movieID))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(WatchMovieRow);
