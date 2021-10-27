import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import ListFries from './components/ListFries';
import CreateFries from './components/CreateFries';
// import UpdateFries from './components/UpdateFries';
import ViewFries from './components/ViewFries';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Beers from './components/Beers';


function App() {
  return (
    //display all components: 
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          {/* switch components require onValueChange to update values */}
          <Switch>
            {/* when localhost:3000 gets called upon the following components/routes get rendered */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/fries" component={ListFries} ></Route>
            <Route path="/add-fries/:id" component={CreateFries} ></Route>
            {/* <Route path = "/update-fries/:id" component = {UpdateFries} ></Route> */}
            <Route path="/view-fries/:id" component={ViewFries} ></Route>
            <Route path="/recipe" exact component={Recipe}></Route>
            <Route path="/beerpairing" exact component={Beers}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
