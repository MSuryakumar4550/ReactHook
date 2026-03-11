import { useLocation } from 'react-router-dom';

function Dashboard(){
    const location = useLocation();
    const user = location.state?.userName;   
    
    return (
        <div>
            <h1>{`Hello ${user}!`}</h1>
        </div>
    );
}

export default Dashboard;