import React from "react";

import "./EventArea.css";

const EventArea = props => (
  <section className="imageWrapper">
    <div className="eventImage">
      <img src={props.currentEvent.url} alt={props.currentEvent.msg} />
    </div>
    <div className="wagonImage">
      <img src="/img/wagon_default.gif" alt="Placeholder" />
    </div>
  </section>
);

export default EventArea;
