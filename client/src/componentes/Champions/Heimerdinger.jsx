import './Champion.css'
import heimerwpp from './heimerdinger-skin/heimer-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import dif from './diff3.png'
import mago from './mago.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import heimerdragao from './heimerdinger-skin/heimer-dragao.jpg'
import heimerneve from './heimerdinger-skin/heimer-neve.jpg'
import heimerpiloto from './heimerdinger-skin/heimer-piloto.jpg'
import heimertoxico from './heimerdinger-skin/heimer-toxico.jpg'
import heimerverao from './heimerdinger-skin/heimer-verao.jpg'


const Heimerdinger = () => {

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
            <img src={heimerwpp} alt=""  />
        </div>
            
            <ChampionFunc
                t1="O INVENTOR IDOLATRADO" 
                t2="HEIMERDINGER"
                funcao="MAGO"
                func={mago}
                dif={dif}
                dificuldade="ALTA"
                historia="Um cientista brilhante, mesmo que excêntrico, o Professor Cecil B. Heimerdinger
                 é um dos inventores mais inovadores e estimados que Piltover já conheceu. Incansável em seu 
                 trabalho ao ponto da obsessão neurótica, ele busca responder as questões mais..."
    
                 historiaCompleta="Um cientista brilhante, mesmo que excêntrico, o Professor Cecil B. 
                 Heimerdinger é um dos inventores mais inovadores e estimados que Piltover já conheceu. 
                 Incansável em seu trabalho ao ponto da obsessão neurótica, ele busca responder as questões 
                 mais impenetráveis do universo. Apesar de suas teorias frequentemente parecerem obscuras e 
                 esotéricas, Heimerdinger produziu algumas das máquinas mais miraculosas, sem mencionar letais,
                 de Piltover e ajusta constantemente suas invenções para torná-las ainda mais eficientes."
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: heimerdragao, nameSkin: 'HEIMERDINGER TREINADOR DE DRAGÕES'},
                {img: heimerneve, nameSkin: 'HEIMERDINGER BONECO DE NEVE'},
                {img: heimerpiloto, nameSkin: 'HEIMERDINGER TUNANDO EM PILTOVER'},
                {img: heimertoxico, nameSkin: 'HEIMERDINGER SUBSTÂNCIAS PERIGOSAS'},
                {img: heimerverao, nameSkin: 'HEIMERDINGER CURTINDO O VERÃO'},
                ]} />
        </div>
        </div>
}
       </>
     )

}


  
 
export default Heimerdinger;
