import "./App.css";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import Router from "./components/Router.jsx";
import Page404 from "./pages/404.jsx";
import Search from "./pages/Search.jsx";
import { Route } from "./components/Route.jsx";

const routes = [{ path: "/search/:query", Component: Search }];

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  );
}

export default App;
