import React from "react";
import NewBooking from "components/NewBooking";
import AllBookings from "components/AllBookings";

class BookingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      filter: 1
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewBooking = this.addNewBooking.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
  }

  handleFormSubmit(space_id, start_date, end_date) {
    let body = JSON.stringify(
      { space_id: space_id, start_date: start_date, end_date: end_date }
    );

    fetch("http://localhost:3000/api/v1/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(booking => {
        this.addNewBooking(booking);
      });
  }

  addNewBooking(booking) {
    this.setState({
      bookings: this.state.booking.concat(booking)
    });
  }

  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log("Booking was deleted!");
      this.deleteBooking(id);
    });
  }

  deleteBooking(id) {
    newBookings = this.state.bookings.filter(booking => booking.id !== id);
    this.setState({
      bookings: newBookings
    });
  }

  handleUpdate(booking) {
    fetch(`http://localhost:3000/api/v1/bookings/${booking.id}`, {
      method: "PUT",
      body: JSON.stringify({ booking: booking }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      this.updateBooking(booking);
    });
  }

  updateBooking(booking) {
    let newBookings = this.state.bookings.filter(f => f.id !== booking.id);
    newBookings.push(booking);
    this.setState({
      bookings: newBookings
    });
  }

  componentDidMount() {
    fetch("/api/v1/bookings.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ booking: data });
      });
  }
  render() {
    return (
      <div>
        <h2>Add new booking</h2>
        <NewBooking handleFormSubmit={this.handleFormSubmit} />
        <h2>All bookings</h2>
        <AllBookings
          // filter={this.state.filter}
          bookings={this.state.bookings}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default BookingsContainer;