import { Route, Routes } from "react-router";
import Clock from "./chapter_04/Clock";
import Home from "./page/Home";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </div>
  );
}

export default App;
