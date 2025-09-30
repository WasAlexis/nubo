import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.jsx';

function Router() {
    return (
        <Routes>
            <Route path="/" element={ <h1>Welcome to Nubo</h1> } />
            <Route path='/login' element={ <Login /> } />
        </Routes>
    );
}

export default Router;