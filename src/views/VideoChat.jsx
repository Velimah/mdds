import CreateVideoChatRoom from "../components/CreateVideoChatRoom";

const VideoChat = () => {
    return (
      <>
        <div className="bg-tertiary py-3 lg:py-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-fourth drop-shadow-sm">Videochatti WebRTC:llä</h1>
        </div>
        <CreateVideoChatRoom />
      </>
    );
  };
  
  export default VideoChat;
  