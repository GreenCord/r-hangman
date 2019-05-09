import React from "react";

import "./ActionTextArea.css";

const ActionTextArea = props => (
  <section className="actionText">
    <p>
      {props.actionMessage.length > 1
        ? props.actionMessage
        : props.currentEvent.msg}
    </p>
  </section>
);

export default ActionTextArea;
