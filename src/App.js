import './App.css';

//Components
import Header from './components/Header';
import Slider from './components/Slider';
import HomeSlider from './components/HomeSlider';
//import Info from './components/Info';
import Footer from './components/Footer';
import Modal from "./components/Modal";

//Data
import { SliderData } from './data/SliderData';
import { FreegoData } from './data/FreegoData';
import { RazorData } from './data/RazorData';

//Pages
import Buy from './pages/Buy';
import HomePage from './pages/HomePage';
import {Cart} from './pages/Cart';
import Rent from './pages/Rent';

//Dependencies 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RazorText } from './data/RazorData';
import { FreegoText } from './data/FreegoData';

//Props (colors)
const mainColor = 'coral';
const FreegoColor = 'grey';
const RazorColor = 'green';


function App() {
  return (
    <div>
      <Router>
        <Route component={Header} />
        <Route path="/" exact>
          <HomePage pictures={
            <HomeSlider slides={SliderData} color={mainColor}/>
          } />
        </Route>
        <Route path="/buy/freego">
          <Buy
            info={FreegoText}
            pictures={
            <Slider slides={FreegoData} color={FreegoColor} />
          } />
        </Route>
        <Route path="/buy/razor">
          <Buy
            info={RazorText}
            pictures={
            <Slider slides={RazorData} color={RazorColor} />
          } />
        </Route>
        <Route path="/rent/razor">
          <Rent
            info={RazorText}
            pictures={
            <Slider slides={RazorData} color={RazorColor} />
          } />
        </Route>
        <Route path="/rent/freego">
          <Rent
            info={FreegoText}
            pictures={
            <Slider slides={FreegoData} color={FreegoColor} />
          } />
        </Route>
        <Route path='/cart'>
          <Modal page={
            <Cart
              Freego={FreegoData}
              Razor={RazorData} />
          }/>
        </Route>
        <Route component={Footer} />
      </Router>
    </div>
  )
}

export default App;
