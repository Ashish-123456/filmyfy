
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/header/Header.js"; 
import Home from "./pages/home/home.js";   
import MovieList from './components/movielist/movielist.js';
import Movie from "./pages/moviedetail/moviedetail.js";
function App() {
  return (
<>
<div className="App">
<Router>
<Header />
  <Routes>
    <Route index element={<h1><Home /></h1>}></Route>
    <Route path="movie/:id" element={<h1><Movie /></h1>}></Route>
    <Route path="movies/:type" element={<h1><MovieList /></h1>}></Route>
    <Route path="/*"elements={<h1>Error page</h1>}></Route>
    
  </Routes>
</Router>
</div>

</>
  );
}

export default App;
