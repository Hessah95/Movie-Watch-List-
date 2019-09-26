import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <dev className="container">
        {/* <br /> */}
        {/* <hr /> */}
        <h3>Search for a movie...</h3>
        <input
          className="form-control"
          type="text"
          onChange={item => this.props.changeHandler(item.target.value)}
        />
      </dev>
    );
  }
}

export default Search;
