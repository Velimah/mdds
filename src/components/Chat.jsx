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
    let information = { username: username, message: message };
    if (general) {
      socket.emit("chat message general", information);
    } else {
      socket.emit("chat message random", information);
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
      <div className=" grow flex flex-col justify-center items-center">
        {submitted && (
          <div className="grow m-0 lg:m-4 rounded-lg w-full max-w-5xl p-2 md:px-6 pb-0 bg-fourth flex flex-col justify-between shadow-md">
            <div className="flex justify-center pb-2 mb-4 border-b-2 border-secondary">
              <button
                onClick={General}
                type="submit"
                className={`text-xl p-2 m-2 inline-flex justify-center text-black rounded-md cursor-pointer ${
                  general
                    ? "bg-tertiary shadow-md"
                    : "hover:bg-tertiary transition duration-200"
                }`}
              >
                {" "}
                Yleinen
              </button>
              <button
                onClick={() => {
                  Random();
                }}
                type="submit"
                className={`text-xl p-2 m-2 inline-flex justify-center text-black rounded-md cursor-pointer ${
                  !general
                    ? "bg-tertiary shadow-md"
                    : "hover:bg-tertiary transition duration-200"
                }`}
              >
                Elokuvat
              </button>
            </div>
            <div>
              <ul
                id="messages"
                className="flex flex-col grow justify-start max-h-96 overflow-y-scroll"
                ref={messagesContainerRef}
              >
                {messages.map((msg, index) => (
                  <li
                    className=" border-2 border-tertiary text-md text-black p-3 mx-3 m-1 rounded-lg fit-content text-left w-fit flex shadow-md"
                    key={index}
                  >
                    <div className="">{msg.time}</div>
                    <div className="font-bold px-2">{msg.username + ":"}</div>
                    <div className="">{msg.message}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-center w-full">
              <form onSubmit={handleSubmit} className="w-full md:w-1/2">
                <label htmlFor="chat" className="sr-only">
                  Viestisi
                </label>
                <div className="flex items-center py-2 bg-fourth">
                  <div className="bg-fourth px-2 m-2 text-xl min-w-fit">
                    {username + " :"}
                  </div>
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="chat"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-md"
                    placeholder="Viestisi..."
                  ></input>
                  <button
                    type="submit"
                    className="inline-flex justify-center p-2 m-2 rounded-full cursor-pointer hover:bg-tertiary hover:shadow-md transition duration-200"
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
            </div>
          </div>
        )}

        {!submitted && (
          <>
            <div className="bg-fourth max-w-xl w-full rounded-lg md:shadow-md">
              <div className="text-xl lg:text-2xl p-2 lg:p-4">
                {" "}
                Liity chattiin antamalla nimesi
              </div>
              <form
                onSubmit={handleSubmit2}
                className="md:w-1/2 mx-auto pb-0 md:pb-4"
              >
                <label htmlFor="chat" className="sr-only">
                  Käyttäjänimi
                </label>
                <div className="flex items-center px-3 bg-fourth">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="chat"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nimi"
                  ></input>
                  <button
                    type="submit"
                    className="inline-flex justify-center p-2 m-2 rounded-full cursor-pointer hover:bg-tertiary transition duration-200 hover:shadow-md"
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
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chat;
