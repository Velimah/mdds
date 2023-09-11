import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Elokuvat from "./views/Elokuvat";
import Aikataulu from "./views/Aikataulu";
import Tietoja from "./views/Tietoja";
import ScrollToTop from "./hooks/ScrollHook";
import ChatRoom from "./views/ChatRoom";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/elokuvat" element={<Elokuvat />} />
          <Route path="/aikataulu" element={<Aikataulu />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/tietoja" element={<Tietoja />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
