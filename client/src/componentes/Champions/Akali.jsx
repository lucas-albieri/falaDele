import './Champion.css'
import akaliwpp from './akali-skin/akali-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';
import ass from './ass.png'
import dif from './dif2.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import akalienfermeira from './akali-skin/Akali-enfermeira.jpg'
import akalifut from './akali-skin/Akali-fut.jpg'
import akalikakashi from './akali-skin/Akali-kakashi.jpg'
import akalisangue from './akali-skin/Akali-sangue.jpg'
import akalisashimi from './akali-skin/Akali-sashimi.jpg'


const Akali = () => {

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
            <img src={akaliwpp} alt="" />
        </div>
            
            <ChampionFunc
                t1="A ASSASSINA RENEGADA" 
                t2="AKALI"
                funcao="ASSASSINO"
                func={ass}
                dif={dif}
                dificuldade="MODERADO"
                historia="Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca
                 sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o
                 que aprendeu com seu mestre Shen, ela se comprometeu a defender"
                 
                historiaCompleta="Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora 
                ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo 
                o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus inimigos, 
                um assassinato de cada vez. Akali pode atacar em silêncio, mas sua mensagem será ouvida em 
                voz alta e clara: “Temam a assassina sem mestre”. "
           />

        <div className="champion-skins">
            <Skins listData={[
                {img: akalisashimi, nameSkin: 'AKALI SASHIMI'},
                {img: akalienfermeira, nameSkin: 'AKALI ENFERMEIRA'},
                {img: akalisangue, nameSkin: 'AKALI LUA SANGRENTA'},
                {img: akalikakashi, nameSkin: 'AKALI PRESA DE PRATA'},
                {img: akalifut, nameSkin: 'AKALI ESPORTISTA'},
                ]} />
        </div>
        </div>
}
       </>
     )

}


  
 
export default Akali;
