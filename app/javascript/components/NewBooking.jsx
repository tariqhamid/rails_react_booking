import React from "react";

const NewBooking = props => {
  let formFields = {};

  return (
    <form
      style={{
        margin: "1em",
        padding: "1em",
        border: "1px solid #ddd"
      }}
      onSubmit={e => {
        props.handleFormSubmit(formFields.space_id.value, formFields.start_date.value, formFields.end_date.value);
        e.target.reset();
        e.preventDefault();
      }}
    >
      <input
        ref={input => (formFields.space_id = input)}
        placeholder="Enter the space id"
      />
      <div class="date">
        <input
          ref={input => (formFields.start_date = input)}
          placeholder="Enter the start date"
        />
      </div>
      <div class="date">
        <input
          ref={input => (formFields.end_date = input)}
          placeholder="Enter the end date"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default NewBooking;