import "./Home.css"
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer, createContext } from 'react';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const initialState = { name: "" };

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        default:
            return state;
    }
};

function HomeContent(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    
    function Submit(){
        navigate("/dashboard", { state: { userName: state.name } });
    }
    
    return(
        <div className = "Login">
                <h1>Please Login</h1>
                <label>Name : </label>
                <input type = "text" placeholder = "Enter your name " value={state.name} onChange={(e) => dispatch({type: 'SET_NAME', payload: e.target.value})}></input>
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
