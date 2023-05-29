import { useMotionValue, motion, useTransform, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  return (
    <div className="flex h-screen flex-col justify-end pb-10">
      <Dock />
    </div>
  );
}

function Dock() {
  // * store mouseX position as a motionValue
//   ? this number must not fall in range -200 / 200, this prevents the circles to be default size when the page is refreshed
  let mouseX = useMotionValue(Infinity);

  return (
    // ? onMouseMove prop tracks the mouse position inside that element
    <div
      onMouseMove={(e) => {
        // * update it
        mouseX.set(e.pageX);
        // console.log(e.pageX, "x");
        // console.log(e.pageY, "y");
      }}
    //   ? sets the mouseX back to infinity once mouse has left the div, this makes the circles be default size again
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
    >
      {[...Array(6).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </div>
  );
}

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
    // ? create a ref to the div emelent
  let ref = useRef<HTMLDivElement>(null);
//   ? this distance is the distance between the middle of the circle and its edge
  let distance = useTransform(mouseX, (val) => {
    // * since ref could be undefined we need to create a dummy object to avoid type errors in case react failes to set a ref to the div
    let bounds = ref.current?.getBoundingClientRect() ?? {x: 0, width: 0};
    // * erorr here
    return val - bounds.x - bounds.width / 2;
  });
  // ? useTransform, maps one range to another when our mouseX goes from 0-300, we want our width to go from 40-80
  // let width = useTransform(mouseX, [0, 300], [40,80]);
  // ? useTransform, maps one range to another when our mouseX goes from 0-300-600, we want our width to go from 40-80-40

  let widthSync = useTransform(distance, [-200, 0, 200], [40, 100, 40]);
//   ? makes the animation smooth

// * defaults
//   let width = useSpring(widthSync, {damping: 10, mass: 1, stiffness: 100}) 
  let width = useSpring(widthSync, {damping: 15, mass: 0.1, stiffness: 200}) 
  return (
    <motion.div
    // ? div ref here
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-500"
    />
  );
}
