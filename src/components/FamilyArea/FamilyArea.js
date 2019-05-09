import React from "react";

import "./FamilyArea.css";

const FamilyArea = props => (
  <section className="family">
    {props.family.map((f, i) => (
      <div
        key={f.name + i}
        className="familyName"
        style={{ color: f.alive === true ? "lime" : "maroon" }}
      >
        {f.name}
      </div>
    ))}
  </section>
);

export default FamilyArea;
