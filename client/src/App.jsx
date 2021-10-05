import {Switch,Route} from 'react-router-dom'


import Login from './login/Login';
import Register from './Register/Register';
import Home from './componentes/Home';
import Zed from './componentes/Champions/Zed';
import Akali from './componentes/Champions/Akali';
import Diana from './componentes/Champions/Diana';
import Heimerdinger from './componentes/Champions/Heimerdinger';
import Yone from './componentes/Champions/Yone';
import Jinx from './componentes/Champions/Jinx';
import Ornn from './componentes/Champions/Ornn';
import Lillia from './componentes/Champions/Lillia';

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
          <Route path='/diana' component={Diana} />
          <Route path='/heimerdinger' component={Heimerdinger} />
          <Route path='/yone' component={Yone} />
          <Route path='/jinx' component={Jinx} />
          <Route path='/ornn' component={Ornn} />
          <Route path='/lillia' component={Lillia} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
