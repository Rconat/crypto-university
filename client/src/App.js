import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// importing pages
import Login from './pages/login/login'
import Welcome from './pages/welcome/welcome';
import About from './pages/about/about';
import Dashboard from './pages/dashboard/dashboard';
import Investments from './pages/investments/investments';
import Syllabus from './pages/syllabus/syllabus';
import Quiz from './pages/quiz/quiz';
import Prices from './pages/prices/prices';


// importing components
import Nav from './components/nav'
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <Router>
      <Nav />
      <AuthProvider>
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
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/'>
            <Welcome />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
