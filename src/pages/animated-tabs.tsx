import { useState } from "react";
import { motion } from "framer-motion";

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/50"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                style={{
                    // ? borderRadius needs to be default css to prevent distortion by framer-motion
                    borderRadius: 9999,
                }}
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute inset-0 rounded-full bg-white"
              />
            )}
            <span className="relative z-10 mix-blend-exclusion">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* <div className="mt-4 flex w-[65%] justify-start">
        <motion.div
          layoutId="red-dot"
          className="h-5 w-5 rounded-full bg-red-500"
        />
      </div> */}
    </div>
  );
}
