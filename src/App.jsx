import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./views/layout";
import Home from "./views/home";
import ScrollToTop from "./hooks/ScrollHook";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
