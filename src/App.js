import { Route, Routes } from "react-router";
import Header from "./Components/Header/Header";
import Home from "./page/Home";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";

function App() {

  return (<div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  </div>
  );
}

export default App;
