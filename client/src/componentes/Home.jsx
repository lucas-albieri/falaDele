import { useState,useEffect } from 'react';
import Header from './Header';
import './Home.css'
import HashLoader from "react-spinners/HashLoader";
import Bloco2 from './bloco2';
import VideoHome from './VideoHome';

const Home = () => {
    const  [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 1000)
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
           

            <div className="paizao">
                <div className="bloco1">
                    <Header />
                </div>
                <div className="bloco2">
                    <Bloco2 />
                </div>
                <div className="bloco3">
                    <VideoHome />
                </div>
            </div>

             }

        </>
    );
}
 
export default Home;