import { io } from "socket.io-client";

const socket = io("https://mdds-backend.azurewebsites.net", {
});

export default socket;