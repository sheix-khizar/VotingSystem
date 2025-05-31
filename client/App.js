import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [candidate, setCandidate] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const register = async () => {
        await axios.post('http://localhost:5000/register', { username, password });
        alert('Registered!');
    };

    const login = async () => {
        try {
            await axios.post('http://localhost:5000/login', { username, password }, { withCredentials: true });
            setLoggedIn(true);
        } catch {
            alert('Login failed');
        }
    };

    const vote = async () => {
        try {
            await axios.post('http://localhost:5000/vote', { candidate }, { withCredentials: true });
            alert('Vote casted');
        } catch (err) {
            alert(err.response.data);
        }
    };

    return (
        <div className="p-6 text-center">
            <h1 className="text-xl font-bold mb-4">Voting App</h1>
            <input className="border m-1 p-1" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input className="border m-1 p-1" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <div>
                <button className="bg-blue-500 text-white px-3 py-1 m-1" onClick={register}>Register</button>
                <button className="bg-green-500 text-white px-3 py-1 m-1" onClick={login}>Login</button>
            </div>
            {loggedIn && (
                <div className="mt-4">
                    <input className="border p-1" placeholder="Candidate Name" onChange={e => setCandidate(e.target.value)} />
                    <button className="bg-purple-600 text-white px-3 py-1 m-1" onClick={vote}>Vote</button>
                </div>
            )}
        </div>
    );
}

export default App;