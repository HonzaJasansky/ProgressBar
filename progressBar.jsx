import React, { Component } from "react";
import BackTrack from "../elements/backTrack";
import H1 from "../elements/headline1";

class ProgressBar extends Component {
  //vytvoření komponenty progressBar
  render() {
    return (
      <div>
        <H1>ProgressBar</H1>
        <BackTrack
          progress={this.props.progress}
          data-label="Loading..."
        ></BackTrack>
      </div>
    );
  }
}

export default ProgressBar;
