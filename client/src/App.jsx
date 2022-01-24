import {Switch,Route} from 'react-router-dom'

import Login from './login/Login';
import Register from './Register/Register';
import Home from './Pages/Home';


import ('./App.css')


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
          <Route path='/' component={Home} />
        </Switch>

    </div>
  );
}

export default App;
