import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/insert" element={<Insert />}></Route>
            <Route path="/display" element={<Display />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
