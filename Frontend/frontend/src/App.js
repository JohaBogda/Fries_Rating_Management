import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import ListFries from './components/ListFries';
import CreateFries from './components/CreateFries';
import UpdateFries from './components/UpdateFries';

function App() {
  return (
    //display all components: 
    <div>
      <Router>
          <Header />
          <div className="container">
            {/* switch components require onValueChange to update values */}
            <Switch>
               {/* when localhost:3000 gets called upon the following components/routes get rendered */}
              <Route path = "/" exact component = {ListFries}></Route>
              <Route path = "/fries"  component = {ListFries} ></Route>
              <Route path = "/add-fries" component = {CreateFries} ></Route>
              <Route path = "/update-fries/:id" component = {UpdateFries} ></Route>
            </Switch>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
