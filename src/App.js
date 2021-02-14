import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">

        </Route>
        <Route path="/my/shelves">

        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
