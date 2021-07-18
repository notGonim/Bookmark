import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from './constants/routes'





import { FourOfour } from './pages/fourOfour';
import { LandingPage } from './pages/landing.page';

function App() {
  return (
    <>
      <FourOfour />
    </>
  );
}

export default App;
