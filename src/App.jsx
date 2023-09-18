import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Streams from "./views/Streams";
import ScrollToTop from "./hooks/ScrollHook";
import ChatRoom from "./views/ChatRoom";
import VideoChatRoom from "./components/VideoChatRoom";
import Dash from "./views/Dash";
import VideoChat from "./views/VideoChat";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/elokuvat" element={<Streams />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/videochat/room/:roomID" element={<VideoChatRoom />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
