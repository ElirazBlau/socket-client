import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../dataContext/DataContext';

export default function Incoming() {

  const { message, setMessage, socket } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/message');
        if (response.data) {
          setMessage(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function

  }, []); 

  useEffect(() => {
   

    socket.on('newmessage', (data) => {
      console.log(data);
      setMessage(data);
    });})

  return (
    <>
      <div>Incoming</div>

      <div>
        {message.map((item) => (
          <div key={item.id}>
            {item.message}
          </div>
        ))}
      </div>
    </>
  );
}
