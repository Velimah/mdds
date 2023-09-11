import { useState, useEffect, useRef } from "react";
import socket from "../webSocket.js";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [general, setGeneral] = useState(true);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages(msg);
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const General = () => {
    socket.emit("joinRoom", "general");
    setGeneral(true);
  };
  const Random = () => {
    socket.emit("joinRoom", "random");
    setGeneral(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (general) {
      let information = { u: username, m: message, c: "general" };
      socket.emit("chat message", information);
    } else {
      let information = { u: username, m: message, c: "random" };
      socket.emit("chat message", information);
    }
    setMessage("");
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    setSubmitted(true);
    socket.emit("joinRoom", "general");
  };

  const messagesContainerRef = useRef(null);

  return (
    <>
      <div className="bg-fourth">
        {submitted && (
          <div className="p-2 bg-fourth">
            <div className="flex pb-4">
              <div className="text-xl p-2 m-2">Rooms:</div>
              <button
                onClick={General}
                type="submit"
                className={`text-xl p-2 m-2 inline-flex justify-center text-black rounded-md cursor-pointer ${
                  general ? "bg-tertiary" : "hover:bg-tertiary"
                }`}
              >
                {" "}
                General
              </button>
              <button
                onClick={() => {
                  Random();
                }}
                type="submit"
                className={`text-xl p-2 m-2 inline-flex justify-center text-black rounded-md cursor-pointer ${
                  !general ? "bg-tertiary" : "hover:bg-tertiary"
                }`}
              >
                Random
              </button>
            </div>
            <div>
              <ul
                id="messages"
                className="flex flex-col justify-start max-h-96 overflow-y-scroll"
                ref={messagesContainerRef}
              >
                {messages.map((msg, index) => (
                  <li
                    className=" border-2 border-tertiary text-md text-black p-3 mx-3 m-1 rounded-lg fit-content text-left w-fit"
                    key={index}
                  >
                    {msg.time} {msg.u}
                    {": "}
                    {msg.m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-xl mt-6">
              <form onSubmit={handleSubmit} className="">
                <label htmlFor="chat" className="sr-only">
                  Your message
                </label>
                <div className="flex items-center py-2 bg-fourth dark:bg-gray-700">
                  <div className="bg-fourth px-2 font-bold"> {username}</div>
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="chat"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></input>
                  <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-6 h-6 rotate-90 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
            </div>
          </div>
        )}

        {!submitted && (
          <>
            <div className="text-2xl p-4">
              {" "}
              Join the chat by entering your username
            </div>
            <form onSubmit={handleSubmit2} className="w-1/2 mx-auto pb-4">
              <label htmlFor="chat" className="sr-only">
                Username
              </label>
              <div className="flex items-center py-2 px-3 bg-fourth dark:bg-gray-700">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="chat"
                  rows="1"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                ></input>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-6 h-6 rotate-90 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Chat;
