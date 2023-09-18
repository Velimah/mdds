import ReactPlayer from "react-player";

const DashVideo = () => {
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
    </div>
  );
};
export default DashVideo;
