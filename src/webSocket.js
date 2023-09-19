import { io } from "socket.io-client";

/*const socket = io("http://localhost:3005");*/

 const socket = io("https://mdds-backend.azurewebsites.net");  

export default socket;