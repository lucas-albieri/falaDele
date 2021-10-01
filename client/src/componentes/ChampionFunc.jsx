import ass from './ass.png'
import dif from './dif2.png'

import './Champions/Zed.css'

const ChampionFunc = (props) => {
    return ( 
        <div className="zed-info">
            <div className="zed-container">
                <h2>{props.t1}</h2>
                <h1>{props.t2}</h1>
                <div className="quadrado">
                    <div className="zed-func">
                        <div className="zed-func-2">
                            <img src={ass} alt="" />
                            <h3>FUNÇÃO</h3>
                            <p>{props.funcao}</p>
                        </div>
                        <div className="zed-func-2">
                            <img src={dif} alt="" />
                            <h3>DIFICULDADE</h3>
                            <p>{props.dificuldade}</p>
                        </div>
                    
                    </div>
                    <div className="zed-historia">
                        <p>{props.historia}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ChampionFunc
