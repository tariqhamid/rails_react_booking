import React from "react";
import { Link } from "react-router-dom";
import BookingsContainer from "components/BookingsContainer";



const styles = {
  margin: "1em",
  padding: "1em",
  border: "1px solid #ddd"
};

export default () => (

  <div style={styles}>
    <center>
    <h1>React RoR Bookings</h1>
    </center>
    <BookingsContainer />
  </div>

);

