import './Champion.css'
import yonewpp from './yone-skin/yone-wpp.png'
import Header from '../Header';
import Skins from '../Skins';
import ChampionFunc from '../ChampionFunc';

import dif from './diff3.png'
import ass from './ass.png'

import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';


import yoneacademia from './yone-skin/yone-academia.jpg'
import yoneespiritual from './yone-skin/yone-espiritual.jpg'
import yoneluz from './yone-skin/yone-lux.jpg'


const Yone = () => {

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
            <img src={yonewpp} alt=""  />
        </div>
            
            <ChampionFunc
                t1="O INESQUECIDO" 
                t2="YONE"
                funcao="ASSASSINO"
                func={ass}
                dif={dif}
                dificuldade="ALTA"
                historia="Em vida, ele foi Yone; meio-irmão de Yasuo e um respeitado aluno da escola de espadachins de seu vilarejo. Mas, ao morrer pelas mãos do irmão, ele se viu perseguido por uma entidade maligna do reino espiritual e foi forçado a exterminá-la com sua própria espada. Agora, condenado a usar uma máscara demoníaca com o rosto da entidade, Yone busca incansavelmente essas criaturas para tentar entender o que ele mesmo se tornou."
            />

        <div className="champion-skins">
            <Skins listData={[
                {img: yoneacademia, nameSkin: 'YONE ACADEMIA DE BATALHA'},
                {img: yoneespiritual, nameSkin: 'YONE FLORESCER ESPIRITUAL'},
                {img: yoneluz, nameSkin: 'YONE EMISSÁRIO DA LUZ'},
                ]} />
        </div>
        </div>
        }
       </>
     )

}

export default Yone;
