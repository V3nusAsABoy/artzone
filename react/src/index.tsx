import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {UserContextProvider} from './UserContext.tsx';
import App from './App.tsx';
import Register from './Register.tsx';
import Login from './Login.tsx';
import Logout from './Logout.tsx';
import DrawingPage from './DrawingPage.tsx';

export default function index(){
    return(
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path = '/drawing/:id' element = {<DrawingPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    )
}