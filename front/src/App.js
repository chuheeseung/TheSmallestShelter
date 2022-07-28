import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DetailScreen from './Screen/DetailScreen';
import ListviewScreen from './Screen/ListviewScreen';
import RegisterScreen from "./Screen/RegisterScreen";
import Nav from "./components/Nav";
import ChatScreen from './Screen/ChatScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<ListviewScreen />} />
                <Route path="/detail" element={<DetailScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/chat" element={<ChatScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;