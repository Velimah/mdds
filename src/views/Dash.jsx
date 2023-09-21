import DashVideo from "../components/DashVideo";

const Dash = () => {
  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Dynamic Adaptive Streaming over HTTP</h1>
      </div>
      <DashVideo />
    </>
  );
};

export default Dash;
