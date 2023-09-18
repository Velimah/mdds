import StreamVideo from "../components/StreamVideo";

const Streams = () => {
  return (
    <>
      <div className="bg-tertiary py-6">
        <h1 className=" pt-5 pb-5 text-4xl">Wowza Stream</h1>
      </div>
      <StreamVideo />
    </>
  );
};

export default Streams;
