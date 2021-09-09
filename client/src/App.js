import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/details">
          <DetailsPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
