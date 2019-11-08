import React, { Component } from "react";
import { Calendar } from "n-calendar";
import "n-calendar/lib/index.css";

function Item(props) {
  return (
    <div
      style={
        props.data.weekday !== 0 && props.data.weekday !== 6
          ? {
              color: "red"
            }
          : null
      }
    >
      {props.data.day}
    </div>
  );
}

export class Demo extends Component {
  render() {
    return (
      <div>
        <Calendar data={[]} firstWeek={1} component={Item} />
      </div>
    );
  }
}

export default Demo;
