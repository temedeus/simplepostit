import React from "react";
import ReactDOM from "react-dom";
import PostItGrid from "./PostItGrid";

/**
 * Simple Post IT main client-side application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Simple Post-it Application</h1>
        <PostItGrid />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
