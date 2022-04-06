const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const msg = document.getElementById('msg');
const roomName = document.getElementById('room-name');
const usersList = document.getElementById('users');
//GET Username & Room from url using qs CDN (https://cdnjs.com/libraries/qs)
const qsData = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

console.log(qsData);

// const { username, room } = qsData;

const socket = io();
//Join to the room
socket.emit('JoinRoom', qsData);

socket.on('message', (data) => {
  //add the message to the chat Window
  outputMessage(data);
  //Automatically scroll down to the last message
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //Emit Message to the server
  socket.emit('chatMessage', msg.value);

  //Clear submitted message
  msg.value = '';
});

//Output Message to DOM
/**
 * We are going to create the following html output for each message
 *      <div class="message">
 *         <p class="meta">Brad <span>9:12pm</span></p>
 *         <p class="text">
 *           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
 *           repudiandae.
 *         </p>
 *       </div>
 */
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `
  <p class="meta">${message.username} <span> ${message.time}</span></p>
  <p class="text"> ${message.text} </p>`;

  chatMessages.appendChild(div);
}

//Get Room's Info
socket.on('roomUsers', (roomInfo) => {
  const { room, users } = roomInfo;

  outputRoomName(room);
  outputUsers(users);
});

//add Room Name
function outputRoomName(room) {
  roomName.innerText = room;
}

function outputUsers(users) {
  const arrayofUsers = users.map((aUser) => `<li>${aUser.username}</li>`);
  console.log(arrayofUsers);
  usersList.innerHTML = arrayofUsers.join('');
}
