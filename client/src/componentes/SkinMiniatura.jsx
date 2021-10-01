import './Skins.css'

const SkinMiniatura = (props) => {
    return ( 
        <div onClick={()=>{props.setImg(props.img)}} className="skin-mini">
            <img src={props.img} alt="" />
            <h2>{props.nameSkin}</h2>
        </div>
     );
}
 
export default SkinMiniatura;