import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// importing pages
import Welcome from './pages/welcome/welcome'
import About from './pages/about/about'
import Dashboard from './pages/dashboard/dashboard'
import Investments from './pages/investments/investments'
import Syllabus from './pages/syllabus/syllabus'
import Prices from './pages/prices/prices'

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
        <Route path="/prices">
          <Prices />
        </Route>
        <Route path="/syllabus">
          <Syllabus />
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
