import Radio from "../components/Radio";
import StreamVideo from "../components/StreamVideo";

const Streams = () => {
  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Audio and video Stream
        </h1>
      </div>
      <Radio />
      <StreamVideo />
    </>
  );
};

export default Streams;
