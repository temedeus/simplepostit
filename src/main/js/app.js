import React from "react";
import ReactDOM from "react-dom";
import PostItGrid from "./component/PostItGrid";
import store from './store';
import { Provider } from 'react-redux'

/**
 * Simple Post IT main client-side application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <h1>Simple Post-it Application</h1>
        <PostItGrid />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
