import React from "react";
import PostIt from "./PostIt";

/**
 * Grid containing all the post its.
 */
class PostItGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      postIts: []
    };

    this.fetchItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  /**
   * Fetch post-its from backend.
   */
  fetchItems() {
    fetch("http://localhost:8080/api/postIts")
      .then(res => res.json())
      .then(
        response => {
          this.setState({
            isLoaded: true,
            postIts: response._embedded.postIts
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  getItems(postIts) {
    return postIts.map(postIt => (
      <PostIt key={postIt._links.self.href} content={postIt.content} />
    ));
  }

  render() {
    const { error, isLoaded, postIts } = this.state;
    const items = this.getItems(postIts);
    if (error) {
      return <div>Oops, something went wrong: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loader"></div>;
    } else {
      return <div className="grid-container">{items}</div>;
    }
  }
}

export default PostItGrid;
