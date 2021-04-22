// routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import PrivateRoute from './components/privateRoute'

// firebase authentication
import { AuthProvider } from './contexts/AuthContext'

// pages
import Login from './pages/login/login'
import Signup from './pages/signup/signup';
import About from './pages/about/about';
import Dashboard from './pages/dashboard/dashboard';
import Investments from './pages/investments/investments';
import Syllabus from './pages/syllabus/syllabus';
import Quiz from './pages/quiz/quiz';
import Prices from './pages/prices/prices';
import ForgotPassword from './pages/forgotPassword/forgotPassword'
import Account from './pages/account/account'
// components
import Nav from './components/nav/nav'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/quiz/:id" component={Quiz} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/prices" component={Prices} />
          <PrivateRoute path="/syllabus" component={Syllabus} />
          <PrivateRoute path="/investments" component={Investments} />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute exact path='/' component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
