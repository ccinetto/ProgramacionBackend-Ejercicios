import { sendMessage } from "./sendMessage.js";

const formMensaje = document.getElementById('formMensajes');

formMensaje.addEventListener('submit',sendMessage);

