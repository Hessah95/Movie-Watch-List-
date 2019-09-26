import React, { Component } from "react";
import "./index.css";

// Components
import WatchMovieRow from "./WatchMovieRow";
import Search from "./Search";

class WatchMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMovies: this.props.list,
      query: ""
    };

    this.filterMovies = this.filterMovies.bind(this);
  }

  filterMovies = query => {
    query = query.toLowerCase();
    let filteredMovies = this.props.list.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredMovies, query });
  };

  componentDidUpdate(props) {
    if (props.list !== this.props.list) {
      this.filterMovies(this.state.query);
    }
  }

  render() {
    let watchMovieRow = "";
    if (this.props.list.length >= 1) {
      watchMovieRow = this.state.filteredMovies.map(movie => (
        <WatchMovieRow
          key={movie.title}
          movie={movie}
          status={this.props.status}
        />
      ));
    }

    return (
      <div className="movies">
        {/* <h3>Movies</h3> */}

        <h3>
          {this.props.title}{" "}
          <span className="badge badge-pill badge-info">
            {this.props.list.length}
          </span>
        </h3>

        <Search changeHandler={this.filterMovies} />

        <h4>{this.props.title}</h4>
        <div className="container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Movie Title</th>
                <th scope="col">Movie Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{watchMovieRow}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default WatchMovieList;
