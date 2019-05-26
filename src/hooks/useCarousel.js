import usePosition from "./usePosition";
import { classnames } from "../utils";

function decoreWithActiveClassName(item) {
  return {
    ...item,
    className: classnames("active", item.className)
  };
}

export default function useCarousel(items, current = 0) {
  const [position, next, previous] = usePosition(current, items.length);

  const slides = items.map((item, index) =>
    index === position ? decoreWithActiveClassName(item) : item
  );

  return { slides, currentIndex: position, next, previous };
}
