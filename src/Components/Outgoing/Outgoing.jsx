import React from 'react'
import {io} from 'socket.io-client'  

export default function Outgoing() {
    const socket = io();

    socket.on("connect", () => {
        console.log(socket.connected); 
      });
      
 const handleSend = () => {
    socket.emit("message", message);
 }     


   socket.on("message", (message) => {
        console.log(message);
      });

  return (
    <>
    
        <title>Socket.IO chat</title>
    <h1></h1>
    
        <ul id="messages"></ul>
        <form id="form" action="" onSubmit={handleSend}>
          <input id="input" autoComplete="off" /><button>Send</button>
        </form>
  
    </>
  )
}
