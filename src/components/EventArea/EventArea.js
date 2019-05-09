import React from "react";

import "./EventArea.css";

const EventArea = props => (
  <section className="imageWrapper">
    <div className="eventImage">
      <img src={props.currentEvent.url} alt={props.currentEvent.alt} />
    </div>
    <div className="wagonImage">
      <img src={props.currentWagon.url} alt={props.currentWagon.alt} />
    </div>
  </section>
);

export default EventArea;
