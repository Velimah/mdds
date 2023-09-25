import Radio from "../components/Radio";
import VideoJS from "../components/VideoJS";

const Streams = () => {
  
  const videoJsOptions = {
    controls: true,
    sources: [
      {
        src: "http://195.148.104.124:1935/jakelu/Kiinnostaa/playlist.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Audio and video Stream
        </h1>
      </div>
      <Radio />
      <VideoJS options={videoJsOptions} />
    </>
  );
};

export default Streams;
