import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DetailUser from './components/users/DetailUser';
import EditUser from './components/users/EditUser';
import AddUser from './components/users/AddUser';

const App=()=>{
  return (
    <Router>
      <div className="App">

          <Navbar/>

          <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/about" component={About}/>
             <Route exact path="/contact" component={Contact}/>
             <Route exact path="/users/add" component={AddUser}/>
             <Route exact path="/users/edit/:id" component={EditUser}/>
             <Route exact path="/users/:id" component={DetailUser}/>
             <Route component={NotFound}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
