import ImageGallery from "../components/ImageGallery";
import imageData from "../assets/movie-list.json";

const Home = () => {
  return (
    <>
      <div className="bg-tertiary py-3 lg:py-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-fourth drop-shadow">
          Tervetuloa sivustolle
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className=" mt-6 p-4 text-2xl bg-fourth w-100% max-w-md rounded-lg md:shadow-xl">IMDB parhaat elokuvat</h2>
        <div>
          <ImageGallery images={imageData} />
        </div>
      </div>
    </>
  );
};
export default Home;
