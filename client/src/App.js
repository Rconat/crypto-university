import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// importing pages
import Welcome from './pages/welcome/welcome'
import Home from './pages/home'
import About from './pages/about'
import Dashboard from './pages/dashboard'
import Investments from './pages/investments'

// importing components
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/investments">
          <Investments />
        </Route>
        <Route path='/'>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
