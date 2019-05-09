import React from "react";

import "./ActionTextArea.css";

const ActionTextArea = props => (
  <section className="actionText">
    <p>{props.actionMessage}</p>
  </section>
);

export default ActionTextArea;
