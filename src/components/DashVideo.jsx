import VideoJS from "./VideoJS";

const DashVideo = () => {
  const videoJsOptions = {
    controls: true,
    techOrder: ["dash"],
    sources: [
      {
        src: "my_video_manifest.mpd",
        type: "application/dash+xml",
      },
    ],
  };

  return (
    <div className=" w-full max-w-5xl">
      <VideoJS options={videoJsOptions} />
    </div>
  );
};
export default DashVideo;
