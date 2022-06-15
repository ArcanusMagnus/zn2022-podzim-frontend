import { Routes, Route } from "react-router-dom";

import Header from "./shared/components/Layout/Header";
import Landing from "./web-sections/pages/Landing";
import SingleArticle from "./web-sections/pages/SingleArticle";
import Vysilac from "./web-sections/pages/Vysilac";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vysilac" element={<Vysilac />} />
        <Route path="/articles/:aid" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
