import { io } from "socket.io-client";

/* const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com"); */  
const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com:3000");
export default socket;