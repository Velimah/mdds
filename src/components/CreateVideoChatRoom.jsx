import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const navigate = useNavigate();

  function create() {
    const id = uuid();
    navigate(`/videochat/room/${id}`);
  }

  return (
    <div className=" grow flex flex-col justify-center items-center">
      <div className="bg-fourth rounded-lg max-w-lg w-full md:shadow-xl">
        <div className="text-2xl p-4"> Luo uusi videochatti</div>
        <button
          className="bg-tertiary hover:bg-secondary hover:text-fourth w-48 rounded-md p-2 px-3 m-4 mb-6 transition duration-200 shadow-md"
          onClick={create}
        >
          Chattiin
        </button>
      </div>
    </div>
  );
};

export default CreateRoom;
