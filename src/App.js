import './App.css';
import  Homepage from './Pages/Homepage/index' ;
import  Signup from './Pages/Signup/Signup' ;
import { HashRouter } from "react-router-dom";
import Storeform from './Pages/Storeform';
import Planform from './Pages/Planform';
import Deletestore from './Pages/DeleteStore/DeleteStore';
import Header from './components/header/header';
import Editform from './Pages/Deleteplan/Deleteplan';
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
  <Route path="/editplan" exact component={Editform} />
  <Route path="/deletestore" exact component={Deletestore} />
  </Switch>
  </Router>
  {/* </HashRouter> */}
  </>
  )
}

export default App;
