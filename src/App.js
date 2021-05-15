
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={LoginPage} />
       <Route exact path='/register' component={RegisterPage} />
     </Switch>
    </div>
  );
}

export default App;
