// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }

  async addChat(message) {

    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    const response = await this.chats.add(chat);
    return response;
  }

  getChat(callback) {
    this.chats
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === "added") {
            callback(change.doc.data())
          }
        })
      })
  }
}

const chatroom = new Chatroom("gaming", "shaun");

chatroom.getChat(data => {
  console.log(data)
});