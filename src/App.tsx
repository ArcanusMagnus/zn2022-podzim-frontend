import { Routes, Route } from "react-router-dom";

import Header from "./shared/components/Layout/Header";
import Landing from "./landing/pages/Landing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
