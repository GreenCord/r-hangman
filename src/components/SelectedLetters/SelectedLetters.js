import React from "react";

import "./SelectedLetters.css";

const SelectedLetters = props => (
  <section className="selected-letters-area">
    Selected Letters: <br />
    {props.selectedLetters}
  </section>
);

export default SelectedLetters;
