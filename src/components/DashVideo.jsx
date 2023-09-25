import VideoJS from "./VideoJS";

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

  return <VideoJS options={videoJsOptions} />;
};
export default DashVideo;
