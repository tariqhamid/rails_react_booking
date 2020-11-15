import React from "react";


const Filter = props => {
  let formFields = {};

  return (
    <div>
      <input
        ref={input => (formFields.filter = input)}
        placeholder="filter on space id"
      />
    </div>
  );
};

export default Filter;