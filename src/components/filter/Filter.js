import React from "react";

const Filter = ({ filterByName }) => (
  <div>
    <p>Find contact by name</p>
    <input type="text" onChange={filterByName} />
  </div>
);

export default Filter;
