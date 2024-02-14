import { useState } from 'react'
import './App.css'
import Layout from '../src/Components/Layout/Layout'
import DataContext from './dataContext/DataContext'
import io from 'socket.io-client';




function App() {

  const [message, setMessage] = useState([]);
  const [incom, setIncom] = useState([]);
const socket = io('http://localhost:8080');
socket.on('message', (data) => {
  console.log(data);
});
  return (
    <>
      <DataContext.Provider value={{ message, setMessage, incom, setIncom, socket }}> 
      <Layout/>
      </DataContext.Provider>
    </>
  )
}

export default App
