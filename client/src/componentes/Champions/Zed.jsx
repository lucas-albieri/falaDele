import './Zed.css'
import zedwpp from './zed-wpp.png'
import Header from '../Header';
import HashLoader from "react-spinners/HashLoader";
import { useState,useEffect } from 'react';
import ass from './ass.png'

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
                        <img src={ass} alt="" />
                        <h3>FUNÇÃO</h3>
                        <p>ASSSASSINO</p>

                        <h3>DIFICULDADE</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
}
       </>
     )

}


  
 
export default Zed;
