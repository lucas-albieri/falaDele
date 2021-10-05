import './Champion.css'
import zedwpp from './Zed-skin/zed-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';
import ass from './ass.png'
import dif from './dif2.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import zedCampeonato from './Zed-skin/zed-campeonato.png'
import zedJurado from './Zed-skin/zed-jurado.jpg'
import zedProjeto from './Zed-skin/zed-projeto.jpg'
import zedtrovao from './Zed-skin/zed-trovao.jpg'
import zedPsyops from './Zed-skin/zed-psyops.jpg'


const Zed = () => {

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
            <img src={zedwpp} alt="" />
        </div>
            
            <ChampionFunc
                t1="O mestre das sombras" 
                t2="ZED"
                func={ass}
                dif={dif}
                funcao="ASSASSINO"
                dificuldade="MODERADO"
                historia="Absolutamente impiedoso e implacável, Zed é o líder da Ordem das Sombras; uma organização criada com a intenção de militarizar as tradições marciais e mágicas de Ionia para expulsar os invasores noxianos. Durante a guerra, o desespero o levou a libertar..."
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: zedCampeonato, nameSkin: 'ZED CAMPEONATO'},
                {img: zedJurado, nameSkin: 'ZED JURADO DA MORTE'},
                {img: zedProjeto, nameSkin: 'PROJETO: ZED'},
                {img: zedtrovao, nameSkin: 'ZED LÂMINA DO TROVÃO'},
                {img: zedPsyops, nameSkin: 'ZED PSYOPS'},
                ]} />
        </div>
        </div>
}
       </>
     )

}


  
 
export default Zed;
