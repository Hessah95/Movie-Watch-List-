import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

// Components
import WatchMovieList from "./WatchMovieList";
import GetMovie from "./GetMovie";

class App extends Component {
  render() {
    let toWatchList = this.props.movies.filter(item => item.status === false);
    let watchedList = this.props.movies.filter(item => item.status === true);

    return (
      <div className="App">
        <div className="container-fluid">
          <GetMovie />
          <br />
          <hr />
          <div className="row">
            <div className="container">
              <WatchMovieList
                className="col-6"
                list={toWatchList}
                title="To Watch List:"
              />
              <br />
              <hr />
              <WatchMovieList
                className="col-6"
                list={watchedList}
                title="Watched List:"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesState.movies
  };
};

export default connect(mapStateToProps)(App);
