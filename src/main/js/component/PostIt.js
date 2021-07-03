import React, { useState } from "react";

/**
 * Single post-it representation written as a functional component.
 * @param {*} postIt
 */
const PostIt = props => {
  // Setup hook for value change
  const [value, setValue] = useState(props.name);

  // Handle value from textarea
  const handleChange = event => {
    setValue(event.target.value);
    props.save(event.target.value);
  };

  return (
    <div className="note">
      <textarea
        maxLength="200"
        className="editable-area"
        defaultValue={props.content}
        onChange={handleChange}
      />
      <div className="close-button">
        <a onClick={() => props.delete()}>X</a>
      </div>
    </div>
  );
};

export default PostIt;
