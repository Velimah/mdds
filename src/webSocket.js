import { io } from "socket.io-client";

// const socket = io("http://localhost:3000/");
const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com");
export default socket;