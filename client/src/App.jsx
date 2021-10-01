import {Switch,Route} from 'react-router-dom'


import Login from './login/Login';
import Register from './Register/Register';
import Home from './componentes/Home';
import Zed from './componentes/Champions/Zed';
import Akali from './componentes/Champions/Akali';

import ('./App.css')


function App() {
  return (
    <div className="App">
     
      <main>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
          <Route path='/zed' component={Zed} />
          <Route path='/akali' component={Akali} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
