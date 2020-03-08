import React from "react";

/**
 * Single post-it representation written as a functional component.
 * @param {*} postIt
 */
const PostIt = props => {
  return (
    <div className="note">
      {props.content}
      <div className="close-button">X</div>
    </div>
  );
};

export default PostIt;
