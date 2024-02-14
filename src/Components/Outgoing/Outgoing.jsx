import { useContext, useEffect } from 'react';
import DataContext from '../../dataContext/DataContext';



export default function Outgoing() {
  const { message, setMessage, socket } = useContext(DataContext);

  useEffect(() => {
    socket.on('newmessage', (data) => {
      console.log(data); // או בכל פעם שנתקבלת הודעה חדשה, תעשה משהו אחר
    });
  
    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      socket.off('newmessage');
    };
  }, []);

  socket.emit('aviad', "nv bang?");

  const handleSend = (e) => {
    e.preventDefault();
    const newMessage = e.target.message.value;
    socket.emit('message', newMessage);
  
  };

  return (
    <div>
      <ul id="messages"></ul>
      <form onSubmit={handleSend}>
        <input type='text' name='message' id='message' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
