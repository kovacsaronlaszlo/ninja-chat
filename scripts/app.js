// dom queries
const chatList = document.querySelector(".chat-list");

// class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "viki");

// get chats & render
chatroom.getChats(data => chatUI.render(data));