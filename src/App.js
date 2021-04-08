import './App.css';
import  Homepage from './Pages/Homepage/index' ;
import  Signup from './Pages/Signup/Signup' ;
import { HashRouter } from "react-router-dom";
import Storeform from './Pages/Storeform';
import Templetes from './Pages/templates/templates';
import Plans from './Pages/Plans/Plans';
import Templateform from './Pages/Templateform';
import Planform from './Pages/Plansform/Plansform';
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
  <Route path="/templates" exact component={Templetes} />
  <Route path="/signup" exact component={Signup} />
  <Route path="/storeform" exact component={Storeform} />
  <Route path="/templateform" exact component={Templateform} />
  <Route path="/editplan" exact component={Editform} />
  <Route path="/deletestore" exact component={Deletestore} />
  <Route path="/planform" exact component={Planform} />
  <Route path="/plans" exact component={Plans} />
  </Switch>
  </Router>
  {/* </HashRouter> */}
  </>
  )
}

export default App;
