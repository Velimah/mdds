import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 md:flex-row md:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`
        p-1 pb-2 px-2 font-normal text-xl text-fourth cursor-pointer
        ${location.pathname === '/elokuvat' ? 'bg-tertiary opacity-90' : 'hover:bg-tertiary hover:opacity-90'}
        rounded transition-colors duration-200 shadow-md
      `}
      >
        <a
          onClick={() => {
            navigate("/elokuvat");
          }}
          className="flex items-center"
        >
          Stream
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`
        p-1 pb-2 px-2 font-normal text-xl text-fourth cursor-pointer
        ${location.pathname === '/videochat' ? 'bg-tertiary opacity-90' : 'hover:bg-tertiary hover:opacity-90'}
        rounded transition-colors duration-200 shadow-md
      `}
      >
        <a
          onClick={() => {
            navigate("/videochat");
          }}
          className="flex items-center"
        >
          Videochat
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`
        p-1 pb-2 px-2 font-normal text-xl text-fourth cursor-pointer
        ${location.pathname === '/chat' ? 'bg-tertiary opacity-90' : 'hover:bg-tertiary hover:opacity-90'}
        rounded transition-colors duration-200 shadow-md
      `}
      >
        <a
          onClick={() => {
            navigate("/chat");
          }}
          className="flex items-center"
        >
          Chat
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`
        p-1 pb-2 px-2 font-normal text-xl text-fourth cursor-pointer
        ${location.pathname === '/dash' ? 'bg-tertiary opacity-90' : 'hover:bg-tertiary hover:opacity-90'}
        rounded transition-colors duration-200 shadow-md
      `}
      >
        <a
          onClick={() => {
            navigate("/dash");
          }}
          className="flex items-center"
        >
          DASH
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-secondary rounded-none border-0">
      <div className="container flex items-center justify-between text-fourth">
        <Typography
          as="a"
          onClick={() => {
            navigate("/");
          }}
          className="mr-4 cursor-pointer py-1.5 font-medium text-2xl"
        >
          Elokuvasivusto
        </Typography>
        <div className="hidden md:block">{navList}</div>
        <IconButton
          variant="text"
          className="relative ml-auto h-4 w-4 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;
