const Home = () => {
  return (
    <>
      <div className="bg-tertiary py-6">
        <h1 className="pb-6">Home</h1>
        <div className="relative overflow-hidden w-full p-[28.125%]">
          <iframe
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            src="https://www.youtube.com/embed/mr15Xzb1Ook?si=GGxpYXS3HPLmmWhU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 p-6 md:p-10 justify-center bg-fourth">
          <div className="flex justify-self-center max-w-sm h-full">
            <img src="imageplaceholder.jpg" alt="" />
          </div>
          <div className="flex justify-self-center max-w-sm h-full">
            <img src="imageplaceholder.jpg" alt="" />
          </div>
          <div className="flex justify-self-center max-w-sm h-full">
            <img src="imageplaceholder.jpg" alt="" />
          </div>
          <div className="flex justify-self-center max-w-sm h-full">
            <img src="imageplaceholder.jpg" alt="" />
          </div>
          <div className="flex justify-self-center max-w-sm h-full">
            <img src="imageplaceholder.jpg" alt="" />
          </div>
          <div className="flex justify-self-center max-w-sm h-full">
            <img src="imageplaceholder.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
