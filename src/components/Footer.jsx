import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="p-2 text-3xl text-primary font-bold bg-slate-200 md:bg-slate-200 lg:bg-slate-500 xl:bg-slate-700">
        Hello world!
      </h1>
      <h1 className="p-2 text-3xl text-secondary font-bold bg-slate-200 md:bg-slate-200 lg:bg-slate-500 xl:bg-slate-700">
        Hello world!
      </h1>
      <h1 className="p-2 text-3xl text-tertiary font-bold bg-slate-200 md:bg-slate-200 lg:bg-slate-500 xl:bg-slate-700">
        Hello world!
      </h1>
      <h1 className="p-2 text-3xl text-fourth font-bold bg-slate-200 md:bg-slate-200 lg:bg-slate-500 xl:bg-slate-700">
        Hello world!
      </h1>
    </>
  );
};

export default Footer;
