import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

export default function Home() {
  let [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="flex w-1/2 justify-center">
        <div className="flex-col text-center">
          <p>Count: {count}</p>
          <div className="mt-4">
            <input
              type="number"
              value={count}
              min={0}
              onChange={(e) => setCount(+e.target.value)}
              className="w-20 bg-black p-1 text-white"
            />
          </div>
        </div>
      </div>
      <div className="flex w-1/2 items-end justify-center">
        <Counter value={count} />
      </div>
    </div>
  );
}

//? This function is the Counter component that receives value prop and uses useSpring hook to create a MotionValue that smoothly transitions to new values over time.

function Counter({ value }: { value: number }) {
  let animatedValue = useSpring(value);

  // ? This useEffect hook updates the animatedValue whenever the value prop changes. MotionValues must be updated outside of components rerender, so inside useEffect.
  useEffect(() => {
    animatedValue.set(value);
  }, [animatedValue, value]);

  // ? This part of the Counter component is creating three columns of numbers from 0 to 9, each digit for a place (hundreds, tens, ones), and passing animatedValue to the Number component.

  return (
    <div className="flex h-6 ring-2 ring-red-500 overflow-hidden">
      <div className="relative w-6">
        {[...Array(10).keys()].map((i) => (
          <Number place={100} mv={animatedValue} number={i} key={i} />
        ))}
      </div>
      <div className="relative w-6">
        {[...Array(10).keys()].map((i) => (
          <Number place={10} mv={animatedValue} number={i} key={i} />
        ))}
      </div>
      <div className="relative w-6">
        {[...Array(10).keys()].map((i) => (
          <Number place={1} mv={animatedValue} number={i} key={i} />
        ))}
      </div>
    </div>
  );
}

function Number({
  place,
  mv,
  number,
}: {
  place: number;
  mv: MotionValue;
  number: number;
}) {

  //? This part of the code is creating a transformed MotionValue y that represents the vertical position of the number. It's calculated based on the current value of mv (which is animated according to the count state), the place value, and the number itself. The purpose is to animate the vertical position of the number so that it scrolls to the correct position as the value changes.

  // * The let y line is like saying, "let's figure out how far to move the list of numbers."
  let y = useTransform(mv, (latest) => {

    // * height is how tall each number is, in this case, it's 24 pixels.
    let height = 24;

    // * placeValue is the number we want to show in the window for this particular column (ones, tens, or hundreds place). We calculate this by taking the current overall number (latest), dividing by the place (1 for ones, 10 for tens, etc.), and then taking the remainder when divided by 10. This gives us the digit for this place.
    let placeValue = (latest / place) % 10;

    // * offset is how far off we are from the number we want to show. We add 10 to the number we want, subtract the place value, and then take the remainder when divided by 10. This gives us a number between 0 and 9 that represents how far to move the list to show the correct number.
    let offset = (10 + number - placeValue) % 10;

    // * memo is the total distance we need to move the list, calculated by multiplying the offset by the height of each number. This is like saying, "each number is 24 pixels tall, so if we need to move by 3 numbers, that's 3 * 24 = 72 pixels.
    let memo = offset * height;

    // * The if statement is there to make sure we always move the shortest distance to the correct number. If the offset is more than 5, that means it's quicker to move upwards to the next set of numbers, so we subtract 10 times the height from the total.
    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex justify-center">
      {number}
    </motion.span>
  );
}
