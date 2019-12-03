import React, { Component } from "react";
import ProgressBar from "./components/progressBar"; //import komponenty
import Button from "./elements/Button"; //import vlastního stylovaného elementu "Button"

class App extends Component {
  state = {
    progress: 0
  };

  loadProgress = () => {
    //funkce pro zamezení přetečení progressBaru
    this.setState({
      progress:
        this.state.progress === 0
          ? this.state.progress + 100
          : this.state.progress
    });
  };

  unloadProgress = () => {
    //funkce pro zamezení podtečení progressBaru
    this.setState({
      progress:
        this.state.progress === 100
          ? this.state.progress - 100
          : this.state.progress
    });
  };

  render() {
    return (
      <React.Fragment>
        <ProgressBar progress={this.state.progress} />
        <Button id="loadButton" onClick={this.loadProgress}>
          Load
        </Button>
        <Button id="unloadButton" onClick={this.unloadProgress}>
          Unload
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
