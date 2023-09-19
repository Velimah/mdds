import { io } from "socket.io-client";

/* const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com"); */  
const socket = io("wss://mediapalvelin.northeurope.cloudapp.azure.com");
export default socket;