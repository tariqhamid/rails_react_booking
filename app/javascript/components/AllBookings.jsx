import React from "react";
import Booking from "components/Booking";

class AllBookings extends React.Component {


  render() {
    let formFields = {};
    var filter =
    <div>
      <input
        ref={input => (formFields.filter = input)}
        placeholder="filter on space id"
      />
    </div>;

    // var bookings = this.props.bookings.filter(booking => booking.space_id == this.filter).map(booking => {
    var bookings = this.props.bookings.map(booking => {
      return (
        <div key={booking}>
          <Booking
            booking={booking}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
      );
    });

    return <div><div>{filter}</div><div>{bookings}</div></div>;
  }
}

export default AllBookings;