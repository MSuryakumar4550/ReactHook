import "./Home.css"
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from 'react';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function HomeContent(){
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
    function Submit(){
        navigate("/dashboard", { state: { userName: name } });
    }
    
    return(
        <div className = "Login">
                <h1>Please Login</h1>
                <label>Name : </label>
                <input type = "text" placeholder = "Enter your name " value={name} onChange={(e) => setName(e.target.value)}></input>
                <button type="submit" onClick={Submit}>Login</button>
        </div>
    )
}

function Home(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;