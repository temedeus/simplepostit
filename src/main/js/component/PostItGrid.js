import React from "react";
import PostIt from "./PostIt";
import AddPostIt from "./AddPostIt";
import { connect } from 'react-redux';
import { savePostIt, editPostit, deletePostit, getAllPostit } from '../action'
/**
 * Grid containing all the post its.
 */
class PostItGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Initial retrieval of items upon mounting grid.
   */
  componentDidMount() {
    this.props.getAllPostit();
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
        save={(content) => this.props.editPostIt(postIt._links.self.href, content)}
        delete={() => this.props.deletePostIt(postIt._links.self.href)}
      />
    ));
  }

  /**
   * Render components.
   */
  render() {
    const { error, isLoaded, postIts, savePostIt } = this.props;
    const items = this.mapItemsToComponent(postIts);
    const newPostItAction = () => savePostIt("Empty note...");
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


const mapStateToProps = function (state) {
  console.log("state", state)
  return {
    isLoaded: state.postit.isLoaded,
    postIts: state.postit.postIts
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    savePostIt: (content) => dispatch(savePostIt(content)),
    editPostIt: (link, content) => dispatch(editPostit(link, content)),
    deletePostIt: (link) => dispatch(deletePostit(link)),
    getAllPostit: () => dispatch(getAllPostit()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostItGrid);