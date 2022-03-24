import Header from './components/Header/Header';
import logo from './logo.svg';
import About from './pages/About/About';
import BaoDuongDev from './pages/BaoDuongDev/BaoDuongDev';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Service from './pages/Service/Service';
// import './App.css';

function App() {
  return (
    <div className='container-main'>
        <Header/>
        <About/>
        <Home/>
        <Product/>
        <Service/>
        <BaoDuongDev/>
    </div>
  );
}

export default App;
