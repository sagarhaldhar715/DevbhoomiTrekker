<<<<<<< HEAD
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
=======
import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
>>>>>>> 7cb0720 (frontend bigad diya)
}

export default App;