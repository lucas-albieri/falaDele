import {Switch,Route} from 'react-router-dom'


import Login from './login/Login';
import Register from './Register/Register';
import Home from './componentes/Home';

import ('./App.css')


function App() {
  return (
    <div className="App">
     
      <main>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
