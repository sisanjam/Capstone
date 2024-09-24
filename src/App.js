import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Forum from './pages/Forum';
import Questionnaire from './pages/Questionnaire';


const App = () => {
  return (
 <BrowserRouter>
  <Routes>
    <Route index element = { <Home />} />
    <Route path ="/questionnaire" element = {<Questionnaire />} />
    <Route path ="/forum" element = {<Forum />} />
  </Routes>
 </BrowserRouter>

  );
};

export default App;
