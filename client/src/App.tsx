import { useState } from "react";

import HomePage from "./HomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-500 ">
      <HomePage />
    </div>
  );
}

export default App;
