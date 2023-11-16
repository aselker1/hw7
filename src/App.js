import Calc from "./calc";
import { useState } from "react";

function App() {
  const [input1,setInput1] = useState(0);
  const [input2,setInput2] = useState(0);
  return (
    <div >
      <Calc input1={input1} setInput1={setInput1} input2={input2} setInput2={setInput2}/>
    </div>
  );
}

export default App;
