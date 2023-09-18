import CreateVideoChatRoom from "../components/CreateVideoChatRoom";

const VideoChat = () => {
    return (
      <>
        <div className="bg-tertiary py-6">
          <h1 className=" pt-5 pb-5 text-4xl">Videochat with WebRTC</h1>
        </div>
        <CreateVideoChatRoom />
      </>
    );
  };
  
  export default VideoChat;
  