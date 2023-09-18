import { io } from "socket.io-client";

const socket = io("https://mediapalvelin.northeurope.cloudapp.azure.com/mdds-backend");

export default socket;