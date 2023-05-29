import { motion, useTransform, useScroll } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function AnimatedPTag({
  rangeStart,
  rangeEnd,
  children,
}: {
  rangeStart: number;
  rangeEnd: number;
  children: React.ReactNode;
}) {
  const [fromRight, setFromRight] = useState(false);
  const [rotation, setRotation] = useState(0);
  // ? In this updated component, we start with fromRight as false (which means all text initially comes from the left). Then we use the useEffect hook to randomly set fromRight to true or false after the component has mounted on the client side. This way, the server-rendered HTML will always match the initial client-side render (with fromRight as false), avoiding the hydration mismatch warning.
  useEffect(() => {
    setFromRight(Math.random() < 0.5);
    setRotation(Math.floor(Math.random() * 61) - 30);
  }, []);

  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    fromRight ? ["100vw", "0vw"] : ["-100vw", "0vw"]
  );
  const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);

  const scale = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [0.01, 1]
  );

  const rotate = useTransform(
    scrollYProgress,
    [rangeStart, rangeEnd],
    [rotation, 0]
  );

  // const color = useTransform(scrollYProgress, [rangeStart, rangeEnd], ["#F2CD5C", "#400E32"]);

  return (
    <motion.p
      style={{ x: x, scale: scale, rotate: rotate, opacity: opacity }}
      className="mb-8"
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}

// const x1 = useTransform(scrollYProgress, [0,0.05], ['100vw', '0vw']);
// const x2 = useTransform(scrollYProgress, [0,0.1], ['100vw', '0vw']);
// const x3 = useTransform(scrollYProgress, [0,0.15], ['100vw', '0vw']);
// const x4 = useTransform(scrollYProgress, [0,0.2], ['100vw', '0vw']);
// const x5 = useTransform(scrollYProgress, [0,0.25], ['100vw', '0vw']);
// const x6 = useTransform(scrollYProgress, [0,0.3], ['100vw', '0vw']);
// const x7 = useTransform(scrollYProgress, [0,0.35], ['100vw', '0vw']);
// const x8 = useTransform(scrollYProgress, [0,0.4], ['100vw', '0vw']);
// const x9 = useTransform(scrollYProgress, [0,0.45], ['100vw', '0vw']);
// const x10 = useTransform(scrollYProgress, [0,0.5], ['100vw', '0vw']);
// const x11 = useTransform(scrollYProgress, [0,0.55], ['100vw', '0vw']);
// const x12 = useTransform(scrollYProgress, [0,0.6], ['100vw', '0vw']);
// const x13 = useTransform(scrollYProgress, [0,0.65], ['100vw', '0vw']);
// const x14 = useTransform(scrollYProgress, [0,0.7], ['100vw', '0vw']);
// const x15 = useTransform(scrollYProgress, [0,0.75], ['100vw', '0vw']);
// const x16 = useTransform(scrollYProgress, [0,0.8], ['100vw', '0vw']);
// const x17 = useTransform(scrollYProgress, [0,0.85], ['100vw', '0vw']);
// const x18 = useTransform(scrollYProgress, [0,0.9], ['100vw', '0vw']);
