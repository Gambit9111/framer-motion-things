import { type NextPage } from "next";
import { Footer } from "@/components/Footer";
import paragraphContents from "@/components/paragraphs";
import AnimatedPTag from "@/components/AnimatedPTag";

const AnimatedContent: NextPage = () => {
  const Z_START = 0.4;
  const Z_INCREMENT = 0.07;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-24 mt-40 text-center text-4xl font-bold tracking-tight">
          <code>useScroll</code> demo
        </h1>
        <article className="mx-auto max-w-lg overflow-hidden p-5 text-lg">
          {paragraphContents.map((content, index) => {
            let Z = Z_START + index * Z_INCREMENT;
            Z = Math.min(1, Z);
            console.log(`Z value for iteration ${index}: ${Z}`);
            const rangeStart = index / paragraphContents.length;
            const rangeEnd = (index + Z) / paragraphContents.length;
            return (
              <AnimatedPTag
                rangeStart={rangeStart}
                rangeEnd={rangeEnd}
                key={index}
              >
                {content}
              </AnimatedPTag>
            );
          })}
        </article>
      </div>
      <Footer />
    </>
  );
};

export default AnimatedContent;

// const animations = [
//     { x: 100, transition: { duration: 1 } },
//     { scale: 2, transition: { duration: 1.5 } },
//     { rotate: 180, transition: { duration: 1 } },
//     // Add more animations as needed
//   ];
//   Then, in your component, map through your content, wrapping each p tag with a motion.p and assigning it an animation from the array:

//   jsx
//   Copy code
//   import { type NextPage } from "next";
//   import { motion, useTransform, useViewportScroll } from "framer-motion";
//   import { Footer } from "@/components/Footer";

//   const AnimatedContent: NextPage = () => {
//     const { scrollYProgress } = useViewportScroll();

//     const animations = [
//       { x: 100, transition: { duration: 1 } },
//       { scale: 2, transition: { duration: 1.5 } },
//       { rotate: 180, transition: { duration: 1 } },
//       // Add more animations as needed
//     ];

//     const content = [
//       "This is the first paragraph",
//       "This is the second paragraph",
//       "This is the third paragraph",
//       // Add more content as needed
//     ];

//     return (
//       <>
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="my-24 mt-40 text-center text-4xl font-bold tracking-tight">
//             <code>useScroll</code> demo
//           </h1>

//           <article className="mx-auto max-w-lg p-5 text-lg">
//             {content.map((text, index) => (
//               <motion.p
//                 key={index}
//                 className="mb-4"
//                 animate={animations[index % animations.length]}
//               >
//                 {text}
//               </motion.p>
//             ))}
//           </article>
//         </div>
//         <Footer />
//       </>
//     );
//   };

//   export default AnimatedContent;
