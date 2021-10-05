import './Champion.css'
import ornnwpp from './ornn-skin/ornn-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import dif from './dif2.png'
import tank from './tank.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import ornsabu from './ornn-skin/orn-sabugueiro.jpg'
import orntrovao from './ornn-skin/orn-trovao.jpg'
import ornpadrao from './ornn-skin/orn-padrao.jpg'



const Ornn = () => {

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
            <img src={ornnwpp} alt=""  />
        </div>
            
            <ChampionFunc
                t1="O FOGO SOB A MONTANHA" 
                t2="ORNN"
                funcao="TANQUE"
                func={tank}
                dif={dif}
                dificuldade="MODERADO"
                historia="Ornn é o espírito Freljordano da forja e da artesania. Ele trabalha na solidão 
                de uma enorme fornalha, construída a marteladas por entre as cavernas de lava do vulcão 
                Pedra-Lar. Lá, ele aquece caldeirões de pedra fundida para purificar metais e forjar itens 
                de qualidade insuperável..."
               
                historiaCompleta="Ornn é o espírito Freljordano da forja e da artesania. Ele trabalha na 
                solidão de uma enorme fornalha, construída a marteladas por entre as cavernas de lava do 
                vulcão Pedra-Lar. Lá, ele aquece caldeirões de pedra fundida para purificar metais e forjar 
                itens de qualidade insuperável. Quando outras divindades — principalmente Volibear — descem 
                à Terra para intervir nos assuntos dos mortais, Ornn aparece para colocar esses seres 
                impetuosos em seu devido lugar, seja com seu fiel martelo ou com o poder ardente das próprias 
                montanhas."
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: ornsabu, nameSkin: 'ORNN SABUGUEIRO'},
                {img: orntrovao, nameSkin: 'ORNN SENHOR DO TROVÃO'},
                {img: ornpadrao, nameSkin: 'ORNN'},
              
                ]} />
        </div>
        </div>
        }
       </>
     )

}

export default Ornn;
