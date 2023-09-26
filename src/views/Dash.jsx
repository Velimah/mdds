import DashVideo from "../components/DashVideo";

const Dash = () => {
  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-fourth drop-shadow-sm">
          Video DASH
        </h1>
      </div>
      <div className=" grow w-full h-full flex justify-center items-center">
        <DashVideo />
      </div>
    </>
  );
};

export default Dash;
