import { Route, Routes, useLocation } from "react-router";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import HomeBtn from "./Components/HomeBtn";
import Home from "./Home";

function App() {
  const router = useLocation();

  return (
    <div>
      {router.pathname !== "/" && <HomeBtn />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/comment" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;
