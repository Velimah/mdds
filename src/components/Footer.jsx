import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-secondary">
        <h1 className="p-2 text-3xl text-fourth font-bold">Footer</h1>
      </div>
    </>
  );
};

export default Footer;
