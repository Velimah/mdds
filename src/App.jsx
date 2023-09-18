import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Elokuvat from "./views/Elokuvat";
import Aikataulu from "./views/Aikataulu";
import Tietoja from "./views/Tietoja";
import ScrollToTop from "./hooks/ScrollHook";
import ChatRoom from "./views/ChatRoom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import { Switch } from "@material-tailwind/react";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/elokuvat" element={<Elokuvat />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/tietoja" element={<Tietoja />} />
            <Route path="/videochat" element={<CreateRoom />} />
            <Route path="/videochat/room/:roomID" element={<Room />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
