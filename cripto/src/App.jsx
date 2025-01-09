import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/components/footer/footer";
import Nav from "./assets/components/nav/nav";
import CriptoPage from "./assets/pages/criptoPage/criptoPage";
import HomePage from "./assets/pages/homePage/homePage";
import Favorites from "./assets/pages/favorites/favorites";
import SingleCoin from "./assets/pages/singleCoin/SingleCoin";
import Login from "./assets/pages/login/login";
import Register from "./assets/pages/register/Register";
function App() {
  return (
    <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cripto" element={<CriptoPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Register />} />
            <Route path="/singleCoin/:uuid" element={<SingleCoin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
