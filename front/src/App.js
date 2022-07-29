import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DetailScreen from './Screen/DetailScreen';
import ListviewScreen from './Screen/ListviewScreen';
import RegisterScreen from "./Screen/RegisterScreen";
import Nav from "./components/Nav";
import ChatScreen from './Screen/ChatScreen';
import Footer from "./components/Footer";
import SignInScreen from './Screen/SignInScreen';
import SignUpScreen from './Screen/SignUpScreen';
import MyPage from './Screen/MyScreen';
import PrivateSignUp from './SignUpPage/components/PrivateSignUp';
import OrganizationSignUp from './SignUpPage/components/OrganizationSignUp';

const App = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<ListviewScreen />} />
                <Route path="/detail" element={<DetailScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/chat" element={<ChatScreen />} />
                <Route path="/signin" element={<SignInScreen />} />
                <Route path="/signup" element={<SignUpScreen />} />
                <Route path="/signup/private" element={<PrivateSignUp />} />
                <Route path="/signup/organization" element={<OrganizationSignUp/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;