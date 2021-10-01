import './Zed.css'
import zedwpp from './zed-wpp.png'
import Header from '../Header';
import Skins from '../Skins';

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';

import ass from './ass.png'
import dif from './dif2.png'
import zedCampeonato from './zed-campeonato.png'
import zedJurado from './zed-jurado.jpg'
import zedProjeto from './zed-projeto.jpg'
import zedtrovao from './zed-trovao.jpg'
import zedPsyops from './zed-psyops.jpg'


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
         
        <div className="zed-pai">
           <Header />
        <div className="zed-wpp">
            <img src={zedwpp} alt="" />
           
        </div>
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
        <div className="zed-skins">
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
