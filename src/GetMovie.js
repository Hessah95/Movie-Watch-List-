import React, { Component } from "react";

import { connect } from "react-redux";
import { getMovie } from "./redux/actions/index";

class GetMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(item) {
    this.setState({ value: item.target.value });
  }

  render() {
    return (
      <div>
        <div className="input-group col-4">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add a new movie"
          ></input>
        </div>

        <div className="input-group-append">
          <button
            className="btn"
            type="button"
            onClick={() => {
              if (this.state.value !== "") {
                this.props.getMovie({
                  title: this.state.value,
                  status: false
                });
                this.setState({ value: "" });
              }
            }}
          >
            <span>Add A New Movie</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovie: movie => dispatch(getMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GetMovie);
