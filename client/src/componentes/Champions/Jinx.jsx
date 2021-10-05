import './Champion.css'
import jinxwpp from './jinx-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import dif from './diff3.png'
import adc from './adc.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import jinxcupido from './jinx-skin/jinx-cupido.jpg'
import jinxelfa from './jinx-skin/jinx-elfa.jpg'
import jinxguardian from './jinx-skin/jinx-guardian.jpg'
import jinxprojeto from './jinx-skin/jinx-projeto.jpg'
import jinxzumbi from './jinx-skin/jinx-zumbi.jpg'


const Jinx = () => {

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
            <img src={jinxwpp} alt=""  />
        </div>
            
            <ChampionFunc
                t1="O GATILHO DESENFREADO" 
                t2="JINX"
                funcao="ATIRADOR"
                func={adc}
                dif={dif}
                dificuldade="MODERADO"
                historia="Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. "
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: jinxcupido, nameSkin: 'JINX CUPIDO MORTAL'},
                {img: jinxelfa, nameSkin: 'JINX ELFA AMBICIOSA'},
                {img: jinxguardian, nameSkin: 'JINX GUARDIÃ ESTELAR'},
                {img: jinxprojeto, nameSkin: 'PROJETO JINX'},
                {img: jinxzumbi, nameSkin: 'JINX CAÇA-ZUMBIS'},
                ]} />
        </div>
        </div>
        }
       </>
     )

}

export default Jinx;
