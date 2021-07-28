import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from './constants/routes'
import IsUserLoggedIn from "./helpers/isUserLoggedIn";
import ProtectedRoute from "./helpers/protectedRoutes";
import Spinner from "./components/spinner/spinner.component";




import { FourOfour } from './pages/fourOfour';
import { LandingPage } from './pages/landing.page';
import { SignupPage } from './pages/signup.page';
import { LoginPage } from './pages/login.page';
import { Dashboard } from "./pages/dashboard.page";

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/home' exact component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
