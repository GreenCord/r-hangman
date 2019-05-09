import React from "react";

import "./ActionTextArea.css";

const ActionTextArea = props => (
  <section className="actionText">
    <p>
      {props.currentEvent.msg.length > 1
        ? props.currentEvent.msg
        : props.actionMessage}
    </p>
  </section>
);

export default ActionTextArea;
