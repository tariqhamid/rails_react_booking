import React from "react";
import Booking from "components/Booking";

class AllBookings extends React.Component {
  render() {
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

    return <div>{bookings}</div>;
  }
}

export default AllBookings;