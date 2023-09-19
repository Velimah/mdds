import { io } from "socket.io-client";

/* const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com"); */  
const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com", { path: "/mdds-backend/socket.io" });
export default socket;