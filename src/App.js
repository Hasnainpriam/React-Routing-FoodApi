import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
    
  return (
    <div className="App" >
      
      <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/home" element={<Home />} />
           <Route exact path="/restaurant" element={<Restaurant />} />
           <Route exact path="/about" element={<About />} />
           <Route exact path="/meal/:mealId" element={<MealDetail />} />
           <Route exact path="*" element={<NotFound />} />
         </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
