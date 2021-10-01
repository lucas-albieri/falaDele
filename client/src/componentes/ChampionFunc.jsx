import ass from './ass.png'
import dif from './dif2.png'

import './Champions/Zed.css'

const ChampionFunc = () => {
    return ( 
        <div className="zed-info">
            <div className="zed-container">
                <h2>O Mestre das Sombras</h2>
                <h1>ZED</h1>
                <div className="quadrado">
                    <div className="zed-func">
                        <div className="zed-func-2">
                            <img src={ass} alt="" />
                            <h3>FUNÇÃO</h3>
                            <p>ASSSASSINO</p>
                        </div>
                        <div className="zed-func-2">
                            <img src={dif} alt="" />
                            <h3>DIFICULDADE</h3>
                            <p>MODERADO</p>
                        </div>
                    
                    </div>
                    <div className="zed-historia">
                        <p>Absolutamente impiedoso e implacável, Zed é o líder da Ordem das Sombras; uma organização criada com a intenção de militarizar as tradições marciais e mágicas de Ionia para expulsar os invasores noxianos. Durante a guerra, o desespero o levou a libertar...</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ChampionFunc
