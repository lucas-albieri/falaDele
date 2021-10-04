/* eslint-disable react/style-prop-object */
import './Bloco2.css'
import Card from './Card'
import Zed1 from './imgs/Zed1.jpg'
import Akali from './imgs/akali.jpg'
import Diana from './imgs/Diana.jpg'
import Heimerdinger from './imgs/Heimerdinger.jpg'
import Yone from './imgs/Yone.jpg'
import Jinx from './imgs/Jinx.jpg'
import Ornn from './imgs/Ornn.jpg'
import Lillia from './imgs/Lillia.jpg'

import {Link} from 'react-router-dom'

const Bloco2 = () => {
    return ( 
        <div className="main">  
            
            <div className="card-top" id="campeoes"><span>ESCOLHA SEU</span>
            <h1>CAMPEÃO</h1></div>
            <div className="card">

                <Link to='/zed'> <Card title="Zed" src={Zed1} style='img-rigth' /> </Link>
                <Link to='/akali'> <Card title="Akali" src={Akali} /></Link>
                <Link to='/diana'> <Card title="Diana" src={Diana} style='img-rigth' /> </Link>
                <Link to='/heimerdinger'> <Card title="Heimerdinger" src={Heimerdinger} style='img-rigth' /> </Link>
                <Link to='/yone'> <Card title="Yone" src={Yone}  /> </Link>
                <Link to='/jinx'> <Card title="Jinx" src={Jinx} style='img-rigth' /> </Link>
                <Link to='/ornn'> <Card title="Ornn" src={Ornn} /> </Link>
                <Link to='/lillia'> <Card title="Lillia" src={Lillia} /> </Link>

            </div>

            
        </div>
     );
}
 
export default Bloco2;