import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Questionnaire from "./pages/Questionnaire";
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";
import Quiz4 from "./components/Quiz4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/Quiz3" element={<Quiz3 />} />
        <Route path="/Quiz4" element={<Quiz4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
