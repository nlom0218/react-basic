import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Home from "./page/Home";

function App() {
  return (<div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
