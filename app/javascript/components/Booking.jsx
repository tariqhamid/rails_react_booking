import React from "react";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editable) {
      let space_id = this.space_id.value;
      let start_date = this.start_date.value;
      let end_date = this.end_date.id;
      let booking = { space_id: space_id, start_date: start_date, end_date: end_date };
      this.props.handleUpdate(booking);
    }
    this.setState({
      editable: !this.state.editable
    });
  }

  render() {
    let space_id = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.space_id = input)}
        defaultValue={this.props.booking.space_id}
      />
    ) : (
      <h3>{this.props.booking.space_id}</h3>
    );
    let start_date = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.start_date = input)}
        defaultValue={this.props.booking.start_date}
      />
    ) : (
      <p>{this.props.booking.start_date}</p>
    );
    let end_date = this.state.editable ? (
      <input
        type="text"
        ref={input => (this.end_date = input)}
        defaultValue={this.props.booking.end_date}
      />
    ) : (
      <p>{this.props.booking.end_date}</p>
    );
    return (
      <div
        style={{
          margin: "1em",
          padding: "1em",
          border: "1px solid #ddd"
        }}
      >
        {space_id}
        {start_date}
        {end_date}
        <button onClick={() => this.handleEdit()}>
          {this.state.editable ? "Submit" : "Edit"}
        </button>
        {!this.state.editable && (
          <button
            onClick={() => this.props.handleDelete(this.props.article.space_id)}
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default Booking;