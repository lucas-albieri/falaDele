import './Champion.css'
import lilliawpp from './lillia-skin/lillia-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import dif from './diff3.png'
import fighter from './axes.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import liliaescuridao from './lillia-skin/lilia-escuridao.jpg'
import liliaespiritual from './lillia-skin/lilia-espiritual.jpg'
import liliapadrao from './lillia-skin/lilia-padrao.jpg'



const Lillia = () => {

    const  [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 500)
    }, [])
    return ( 
        <>
        {
            loading ?
            <HashLoader  className="load"
             color={"#671ED6"}
             loading={loading} 
             size={100} 
             />
            :
         
        <div className="champions-pai">
           <Header />
        <div className="champions-wpp">
            <img src={lilliawpp} alt=""  />
        </div>
            
            <ChampionFunc
                t1="O FLORIR RECEOSO" 
                t2="LILLIA"
                funcao="LUTADOR"
                func={fighter}
                dif={dif}
                dificuldade="ALTA"
                historia="Extremamente tímida, Lillia, a faunesa feérica, percorre saltitante as florestas 
                de Ionia. Sempre escondida a pouca distância dos humanos — cuja misteriosa natureza lhe causa 
                fascínio e, ao mesmo tempo, receio — Lillia espera descobrir por que os sonhos..."
               
                historiaCompleta="Extremamente tímida, Lillia, a faunesa feérica, percorre saltitante as
                 florestas de Ionia. Sempre escondida a pouca distância dos humanos — cuja misteriosa natureza 
                 lhe causa fascínio e, ao mesmo tempo, receio — Lillia espera descobrir por que os sonhos deles 
                 não chegam mais à Árvore dos Sonhos. Agora, ela percorre Ionia com um cajado mágico nas mãos em 
                 busca dos sonhos não realizados das pessoas. Somente assim, a própria Lillia poderá florescer e 
                 ajudar os humanos a resolverem seus medos e encontrarem seu brilho interior. Iiip! "
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: liliaescuridao, nameSkin: 'LILLIA EMISSÁRIA DA ESCURIDÃO'},
                {img: liliaespiritual, nameSkin: 'LILLIA FLORESCER ESPITIRUAL'},
                {img: liliapadrao, nameSkin: 'LILLIA'},
                ]} />
        </div>
        </div>
        }
       </>
     )

}

export default Lillia;
