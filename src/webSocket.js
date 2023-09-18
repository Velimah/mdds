import { io } from "socket.io-client";

const socket = io("https://mdds-backend.azurewebsites.net", {
  path: "/my-custom-path/"
});

export default socket;