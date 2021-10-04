

import './Champions/Champion.css'

const ChampionFunc = (props) => {
    return ( 
        <div className="champion-info">
            <div className="champion-container">
                <h2>{props.t1}</h2>
                <h1>{props.t2}</h1>
                <div className="quadrado">
                    <div className="champion-func">
                        <div className="champion-func-2">
                            <img src={props.func} alt="" />
                            <h3>FUNÇÃO</h3>
                            <p>{props.funcao}</p>
                        </div>
                        <div className="champion-func-2">
                            <img src={props.dif} alt="" />
                            <h3>DIFICULDADE</h3>
                            <p>{props.dificuldade}</p>
                        </div>
                    
                    </div>
                    <div className="champion-historia">
                        <p>{props.historia}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ChampionFunc
