import Chat from "../components/Chat";

const ChatRoom = () => {
  return (
    <>
      <div className="bg-tertiary py-6">
        <h1 className=" pt-5 pb-5 text-4xl">Chat with Websocket</h1>
      </div>
      <Chat />
    </>
  );
};

export default ChatRoom;
