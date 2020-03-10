import React from "react";
import PostIt from "./PostIt";
import AddPostIt from "./AddPostIt";

import { API_ROOT_URL } from "./apiconfig";
/**
 * Grid containing all the post its.
 */
class PostItGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      postIts: []
    };

    this.fetchItems.bind(this);
    this.savePostIt.bind(this);
    this.editPostIt.bind(this);
    this.deletePostIt.bind(this);
  }

  /**
   * Initial retrieval of items upon mounting grid.
   */
  componentDidMount() {
    this.fetchItems();
  }

  /**
   * Fetch post-its from backend.
   */
  fetchItems() {
    fetch(API_ROOT_URL + "postIts")
      .then(res => res.json())
      .then(response => {
        this.setState({
          isLoaded: true,
          postIts: response._embedded.postIts
        });

        error => {
          alert("Something went wrong fetching post-its.");
        };
      });
  }

  savePostIt(content) {
    fetch(API_ROOT_URL + "postIts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content
      })
    }).then(response => {
      response.json().then(data => {
        this.setState({
          isLoaded: true,
          postIts: [...this.state.postIts, data]
        });
      });
      error => {
        alert("Something went wrong saving post-it.");
      };
    });
  }

  editPostIt(link, content) {
    return content => {
      fetch(link, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content
        })
      }).then(response => {
        error => {
          alert("Something went wrong editing post-it.");
        };
      });
    };
  }

  deletePostIt(link) {
    return () => {
      fetch(link, {
        method: "delete"
      }).then(res => {
        this.fetchItems();
        error => {
          alert("Something went wrong deleting post-it.");
        };
      });
    };
  }

  /**
   * Map postIts from state into PostIt components
   *
   * @param {*} postIts
   */
  mapItemsToComponent(postIts) {
    return postIts.map(postIt => (
      <PostIt
        key={postIt._links.self.href}
        content={postIt.content}
        save={this.editPostIt(postIt._links.self.href)}
        delete={this.deletePostIt(postIt._links.self.href)}
      />
    ));
  }

  /**
   * Render components.
   */
  render() {
    const { error, isLoaded, postIts } = this.state;
    const items = this.mapItemsToComponent(postIts);
    const newPostItAction = () => this.savePostIt("--empty content--");
    if (error) {
      return <div>Oops, something went wrong: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <div className="grid-container">
          {items}
          <AddPostIt onClick={newPostItAction} />
        </div>
      );
    }
  }
}

export default PostItGrid;
