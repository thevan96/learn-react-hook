import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TodoForm.style.scss";

const TodoForm = props => {
  const { onSubmit } = props;

  const [value, setValue] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();
    if (onSubmit && value) {
      onSubmit(value);
      setValue('');
    }
  };

  const handleOnChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" onChange={handleOnChange} value={value} />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
  onSubmit: null
};

export default TodoForm;
