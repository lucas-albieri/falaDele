/* eslint-disable react/style-prop-object */
import './Bloco2.css'
import Card from './Card';
import Zed1 from './Zed1.jpg'
import Akali from './akali.jpg'
import Diana from './Diana.jpg'
import Heimerdinger from './Heimerdinger.jpg'
import Yone from './Yone.jpg'
import Jinx from './Jinx.jpg'
import Ornn from './Ornn.jpg'
import Lillia from './Lillia.jpg'

const Bloco2 = () => {
    return ( 
        <main>  
            
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

            
        </main>
     );
}
 
export default Bloco2;