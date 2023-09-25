import ImageGallery from "../components/ImageGallery";
import imageData from "../assets/movieposters.json";

const Home = () => {
  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Tervetuloa sivustolle
        </h1>
      </div>
      {/*}
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
      */}
      <div>
        <div>
          <ImageGallery images={imageData} />
        </div>
      </div>
    </>
  );
};
export default Home;
