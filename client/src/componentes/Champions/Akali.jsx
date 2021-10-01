import './Zed.css'
import akaliwpp from './akali-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import akalienfermeira from './Akali-enfermeira.jpg'
import akalifut from './Akali-fut.jpg'
import akalikakashi from './Akali-kakashi.jpg'
import akalisangue from './Akali-sangue.jpg'
import akalisashimi from './Akali-sashimi.jpg'


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
                funcao="ASSASINO"
                dificuldade="Moderado"
                historia="Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus..."
            />

        <div className="zed-skins">
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
