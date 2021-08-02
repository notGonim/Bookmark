import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from './constants/routes'
import IsUserLoggedIn from "./helpers/isUserLoggedIn";
import ProtectedRoute from "./helpers/protectedRoutes";
import Spinner from "./components/spinner/spinner.component";

import useAuthListener from "./hooks/users/useAuth.hook";
import UserContext from "./store/users/user.context";
import { useDarkMode } from "./services/useDarkMode.service";

const SignupPage = lazy(() => import('./pages/signup.page'))
const DashboardPage = lazy(() => import('./pages/dashboard.page'))
const SigninPage = lazy(() => import('./pages/login.page'))
const SettingPage = lazy(() => import('./pages/edit.page'))
const LandingPage = lazy(() => import('./pages/landing.page'))
const ProfilePage = lazy(() => import('./pages/profile.page'))
const NotFound = lazy(() => import('./pages/fourOfour'))



function App() {

  const { user } = useAuthListener()
  useDarkMode()

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact   >
              <DashboardPage />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.PROFILE} exact   >
              <ProfilePage />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.SETTING} exact   >
              <SettingPage />
            </ProtectedRoute>
            <IsUserLoggedIn user={user} exact loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LANDPAGE}>
              <LandingPage />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} exact loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
              <SigninPage />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} exact loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGNUP}>
              <SignupPage />
            </IsUserLoggedIn>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
