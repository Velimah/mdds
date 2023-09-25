import VideoJS from "./VideoJS";
import ReactPlayer from "react-player";

const DashVideo = () => {
  const videoJsOptions = {
    controls: true,
    sources: [
      {
        src: "my_video_manifest.mpd",
        type: "application/dash+xml",
      },
    ],
  };

  return (
    <div className=" w-full max-w-5xl">
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
