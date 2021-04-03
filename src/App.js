import './App.css';
import  Homepage from './Homepage/index' ;
import  Signup from './Homepage/Signup/Signup' ;
import { HashRouter } from "react-router-dom";
import Storeform from './Storeform';
import Planform from './Planform';
import Header from './components/header/header';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (  
<>
  {/* <Homepage/> */}
  {/* <HashRouter> */}
    <Router>
      <Header/>
  <Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/signup" exact component={Signup} />
  <Route path="/storeform" exact component={Storeform} />
  <Route path="/planform" exact component={Planform} />
  </Switch>
  </Router>
  {/* </HashRouter> */}
  </>
  )
}

export default App;
