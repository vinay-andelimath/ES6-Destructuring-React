//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th> <br />
      <th>Top Speed</th> <br />
      <th>Top Color</th>
      <br />
      <th>Service Charge</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <br />
      <td>{teslaTopSpeed}</td>
      <br />
      <td>{teslaTopColour}</td>
      <br />
    </tr>
    <tr>
      <td>{honda.model}</td>
      <br />
      <td>{hondaTopSpeed}</td>
      <br />
      <td>{hondaTopColour}</td>
      <br />
    </tr>
  </table>,
  document.getElementById("root")
);
