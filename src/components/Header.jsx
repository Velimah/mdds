import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="bg-secondary">
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="text-2xl text-fourth"> Sivusto Nimi</div>
        <div className="text-xl text-fourth">Video</div>
        <div className="text-xl text-fourth">Koti</div>
        <div className="text-xl text-fourth">About</div>
        <div className="space-y-2">
          <div className="w-8 h-0.5 bg-fourth"></div>
          <div className="w-8 h-0.5 bg-fourth"></div>
          <div className="w-8 h-0.5 bg-fourth"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
