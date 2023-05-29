import { Switch } from "react-aria-components";
import { useState } from "react"

export default function Page() {
    let [airplaneMode, setAirplaneMode] = useState(false)

  return (
    <div className="flex h-screen min-h-full flex-col items-center justify-center bg-gray-900 px-6 text-center text-gray-100">
      <div className="flex flex-col">
        <Switch
         isSelected={airplaneMode}
         onChange={setAirplaneMode} 
         className="group inline-flex">
          <div className="mr-4 h-6 w-9 rounded-full border-2 border-transparent bg-zinc-600 ring-offset-2 ring-offset-zinc-900 transition duration-300 group-data-[selected]:bg-green-500 group-data-[focus-visible]:ring-2">
            <div className="h-5 w-5 rounded-full bg-white shadow transition-all duration-300 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[selected]:ml-3 group-data-[pressed]:w-6"></div>
          </div>
          <span>Airplane Mode: {airplaneMode ? "On" : "Off"}</span>
        </Switch>
      </div>
    </div>
  );
}
