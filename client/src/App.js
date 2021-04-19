import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// importing pages
import Login from './pages/login/login'
import Signup from './pages/signup/signup';
import About from './pages/about/about';
import Dashboard from './pages/dashboard/dashboard';
import Investments from './pages/investments/investments';
import Syllabus from './pages/syllabus/syllabus';
import Quiz from './pages/quiz/quiz';
import Prices from './pages/prices/prices';


// importing components
import Nav from './components/nav'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/privateRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/prices" component={Prices} />
          <PrivateRoute path="/syllabus" component={Syllabus} />
          <PrivateRoute path="/investments" component={Investments} />
          <PrivateRoute exact path='/' component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
