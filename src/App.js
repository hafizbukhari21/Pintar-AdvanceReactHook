import logo from './logo.svg';
import './App.css';
import React from 'react'
import useForm from "./useForm"


function App() {
  const [state, setForm] = useForm()

  return (
    <div className="App">
      <input
        type="text"
        value = {state.nama}
        name= "nama"
        onChange={e=>setForm(e)}
      />

      <input
        type="password"
        value = {state.password}
        name= "password"
        onChange={e=>setForm(e)}
      />
    </div>
  );
}

export default App;
