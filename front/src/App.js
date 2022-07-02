import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import DetailScreen from './Screen/DetailScreen';
import ListviewScreen from './Screen/ListviewScreen';
import RegisterScreen from "./Screen/RegisterScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/detail" element={<DetailScreen />} />
                <Route path="/listview" element={<ListviewScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
            </Routes>
        </BrowserRouter>
    );
};


export default App;