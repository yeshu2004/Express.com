import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  async function register(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/register',{
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    if(response.status === 200) {
      alert("Registered successfully")
      Navigate('/login')
    } 
    else {
      alert("Registration failed")
    }
  }
  return (
    <form className="register h-[85vh] bg-zinc-200" onSubmit={register}>
      <h1>New User</h1>
      <input type="email"
             placeholder="email"
             value={email}
             className="block px-5 py-2"
             onChange={e => setEmail(e.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             className="block px-5 py-2"
             onChange={e => setPassword(e.target.value)}/>
      <button className="block px-5 py-2 bg-blue-500 text-white font-semibold">Submit</button>
    </form>
  );
}