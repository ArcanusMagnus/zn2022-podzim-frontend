import { Routes, Route } from "react-router-dom";

import Header from "./shared/components/Layout/Header";
import Landing from "./web-sections/pages/Landing";
import SingleArticle from "./web-sections/pages/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/articles/:aid" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
