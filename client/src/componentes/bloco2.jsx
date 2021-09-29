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

const Bloco2 = () => {
    return ( 
        <div className="main">  
            
            <div className="card-top"><span>ESCOLHA SEU</span>
            <h1>CAMPEÃO</h1></div>
            <div className="card">

                <Card title="Zed" src={Zed1} style='img-rigth' />
                <Card title="Akali" src={Akali} />
                <Card title="Diana" src={Diana} style='img-rigth' />
                <Card title="Heimerdinger" src={Heimerdinger} style='img-rigth' />
                <Card title="Yone" src={Yone}  />
                <Card title="Jinx" src={Jinx} style='img-rigth' />
                <Card title="Ornn" src={Ornn} />
                <Card title="Lillia" src={Lillia} />

            </div>

            
        </div>
     );
}
 
export default Bloco2;