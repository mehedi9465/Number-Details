import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/userGuide/UserGuide';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route exact path='/home'><Home></Home></Route>
          <Route path='/userGuide'><Services></Services></Route>
          <Route path='/about'><About></About></Route>
          <Route path='/login'><Login></Login></Route>
          <Route path='/register'><Register></Register></Route>
          <Route exact path='*'><NotFound></NotFound></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
