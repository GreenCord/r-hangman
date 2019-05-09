import React from "react";

import "./ReplayButton.css";

const ReplayButton = props => (
  <section className="infoArea">
    <button onClick={props.onClick}>Play Again</button>
  </section>
);

export default ReplayButton;
