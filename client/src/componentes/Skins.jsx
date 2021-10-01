import './Skins.css'

import SkinMiniatura from './SkinMiniatura';
import { useState } from 'react';

const Skins = (props) => {
    const [background, setBackground ] = useState(props.listData[0].img)
    return ( 
    
        <div className="champion-skin">
            <img src={background} alt="" />
            <div className="skin-lado">
                <h1>SKINS DISPONÍVEIS</h1>
                <div className="linha"></div>
                {
                    props.listData.map(data=>{
                        return  <SkinMiniatura setImg={setBackground} img={data.img} nameSkin={data.nameSkin} />
                    })
                }
               
            </div>
        </div>
     );
}
 
export default Skins;