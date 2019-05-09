import React from "react";

import "./SelectedLetters.css";

const SelectedLetters = props => (
  <section className="infoArea">
    Selected Letters: <br />
    {props.selectedLetters}
  </section>
);

export default SelectedLetters;
