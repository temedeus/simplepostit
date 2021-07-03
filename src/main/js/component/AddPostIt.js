import React from "react";

/**
 * Single post-it representation written as a functional component.
 * @param {*} postIt
 */
const AddPostIt = props => {
  return (
    <div className="add-postit-wrapper">
      <button onClick={props.onClick} className="add-postit">
        Add
      </button>
    </div>
  );
};

export default AddPostIt;
