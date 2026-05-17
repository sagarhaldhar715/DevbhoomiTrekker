import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Treks from "./pages/Treks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treks" element={<Treks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;