import { Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route path="/" element={ <h1>Welcome to Nubo</h1> } />
        </Routes>
    );
}

export default Router;