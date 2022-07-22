import { Route, Routes } from "react-router";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/comment" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;
