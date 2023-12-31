import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  const imagesArray = Object.values(images);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 md:p-8 justify-center">
      {imagesArray.map((image) => (
        <div
          key={image.id}
          className="flex justify-self-center max-w-sm h-full shadow-xl border border-fourth rounded-lg"
        >
          <img className="rounded-xl" src={image.poster} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
