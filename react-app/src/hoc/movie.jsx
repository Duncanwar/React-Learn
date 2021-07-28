import React, { Component } from "react";
import withTooltip from "./withTooltip";

class Movie extends Component {
  state = {};
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);
