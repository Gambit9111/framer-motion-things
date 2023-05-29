import { MouseEvent } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export default function Page() {
  // let [mousePosition, setMousePosition] = useState({x : 0, y: 0})
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    // console.log({ clientX, clientY}) // !!! gets the x and y of the mouse relative to the parent div
    let { left, top } = currentTarget.getBoundingClientRect(); // !!! get distance from div to the side of the viewport

    let xPosition = clientX - left;
    let yPosition = clientY - top;

    // setMousePosition({ x: xPosition, y: yPosition})
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // ? <div className="group">
  // ?    <div className="group-hover:opacity-100 opacity-0/>

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-800">
      {/* !!!bottom div relative to the top main */}
      <div
        onMouseMove={handleMouseMove}
        className="group relative max-w-md rounded-3xl border border-gray-700 bg-gray-900 px-8 py-12 shadow-2xl"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 rounded-3xl"
          style={{
            // ? background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(14 165 233), transparent 80%)`
            background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15), transparent 80%)`,
          }}
        />
        <div className="">
          <h3 className="text-base font-semibold leading-7 text-sky-500">
            Lifetime membership
          </h3>
          <p className="mt-2 flex items-baseline gap-x-2">
            <span className="text-3xl font-bold tracking-tight text-white/50 line-through">
              $249
            </span>
          </p>
          <div className="mt-2 flex items-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-white">
              $149
            </span>
            <div className="flex flex-col">
              <span className="text-base font-medium text-white">
                early bird discount
              </span>
              <span className="text-base font-medium text-gray-400">
                one-time payment
              </span>
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Lifetime access to all current and future premium Build UI courses,
            forever.
          </p>
          <ul
            role="list"
            className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
          >
            <li className="flex gap-x-3 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0ea5e9"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Courses on Framer Motion, Tailwind, and Remix
            </li>
            <li className="flex gap-x-3 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0ea5e9"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              New videos added weekly
            </li>
            <li className="flex gap-x-3 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0ea5e9"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Refactoring videos on React
            </li>
            <li className="flex gap-x-3 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0ea5e9"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Private Discord
            </li>
            <li className="flex gap-x-3 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0ea5e9"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Summaries with code
            </li>
            <li className="flex gap-x-3 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0ea5e9"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Full access to all future Build UI courses
            </li>
          </ul>
          <div className="mt-8">
            <form>
              <div className="mt-1 flex flex-col rounded-md shadow-sm lg:flex-row">
                <button
                  className="relative -ml-px mt-4 space-x-2 overflow-hidden rounded-md bg-sky-600 py-2 text-lg font-semibold text-white"
                  type="submit"
                  data-testid="checkout-button"
                >
                  <span>Buy now</span>
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
