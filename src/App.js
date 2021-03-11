import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import League from './components/League/League';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
  return (
    
      
    <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/league">
        <League></League>
      </Route>
      <Route path="/leagueDetails/:idLeague">
        <LeagueDetails></LeagueDetails>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="*">
        <NoMatch></NoMatch>
      </Route>
    </Switch>
  </Router>
   
    
    
  );
}

export default App;
