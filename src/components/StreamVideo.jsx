import ReactPlayer from "react-player";

const StreamVideo = () => {
  return (
    <div className="w-full">
      <ReactPlayer
        url="http://195.148.104.124:1935/jakelu/Kiinnostaa/playlist.m3u8"
        controls
        muted
        playing
        width="100%"
        height="100%"
      />
    </div>
  );
};
export default StreamVideo;
