import Chat from "../components/Chat";

const ChatRoom = () => {
  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-fourth">Chat with Websocket</h1>
      </div>
      <Chat />
    </>
  );
};

export default ChatRoom;
