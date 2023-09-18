import { createContext } from "react";
import Child4 from "./Child4";

// create
const data1 = createContext();
const data2 = createContext();

const Parent = () => {
  const name = "mrs programer";
  const age = 20;
  return (
    <>
      {/* provide */}
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <Child4 />
        </data2.Provider>
      </data1.Provider>
    </>
  );
};

export default Parent;
export { data1, data2 };
