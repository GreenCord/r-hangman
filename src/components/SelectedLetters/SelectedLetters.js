import React from "react";

import "./SelectedLetters.css";

const SelectedLetters = props => (
  <section className="infoArea">
    Selected Letters: <br />
    &raquo; {props.selectedLetters.length > 0 ? props.selectedLetters : ""}
  </section>
);

export default SelectedLetters;
