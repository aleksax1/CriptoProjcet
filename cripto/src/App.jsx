import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/homePage/homePage'
import CriptoPage from './assets/pages/criptoPage/criptoPage'
import Nav from './assets/components/nav/nav'
import Footer from './assets/components/footer/footer'

function App() {

  return (
    <>
      <BrowserRouter>
          <Nav/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cripto' element={<CriptoPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
