import React from "react";

export default function usePosition(initialPosition = 0, total) {
  const [position, setPosition] = React.useState(initialPosition);

  function next() {
    if (position + 1 < total) {
      setPosition(position + 1);
    }
  }
  function previous() {
    if (position > 0) {
      setPosition(position - 1);
    }
  }

  return [position, next, previous];
}
