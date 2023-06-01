import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ServicesPage from "./pages/ServicesPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="*" element="Page not exist error 404" />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
