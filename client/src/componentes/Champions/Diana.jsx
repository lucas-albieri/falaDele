import './Champion.css'
import dianawpp from './diana-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import dif from './dif2.png'
import axes from './axes.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import dianasangue from './diana-skin/diana-sangue.jpg'
import dianaprestigio from './diana-skin/diana-prestigio.jpg'
import dianadragao from './diana-skin/diana-dragao.jpg'
import dianasombria from './diana-skin/diana-sombria.jpg'
import dianalunar from './diana-skin/diana-lunar.jpg'


const Diana = () => {

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
            <img src={dianawpp} alt=""  />
        </div>
            
            <ChampionFunc
                t1="O ESCÁRNIO DA LUA" 
                t2="DIANA"
                funcao="LUTADOR"
                func={axes}
                dif={dif}
                dificuldade="MODERADO"
                historia="Empunhando sua espada lunar crescente, Diana luta como uma guerreira dos Lunari, um credo quase extinto nas terras ao redor do Monte Targon. Vestida com uma armadura brilhante da cor da neve de inverno noturna, ela é a personificação do poder da lua..."
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: dianaprestigio, nameSkin: 'DIANA RAINHA DE BATALHA EDIÇÃO PRESTÍGIO'},
                {img: dianadragao, nameSkin: 'DIANA CAÇADORA DE DRAGÕES'},
                {img: dianasombria, nameSkin: 'DIANA ÁGUAS SOMBRIAS'},
                {img: dianasangue, nameSkin: 'DIANA LUA SANGRENTA'},
                {img: dianalunar, nameSkin: 'DIANA DEUSA LUNAR'},
                ]} />
        </div>
        </div>
}
       </>
     )

}


  
 
export default Diana;
