import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="w-full">
      <ReactPlayer
        url="my_video_manifest.mpd"
        controls
        muted
        playing
        width="100%"
        height="100%"
      />
      {/*url="http://195.148.104.124:1935/jakelu/Kiinnostaa/playlist.m3u8"*/}
    </div>
  );
};
export default Video;
