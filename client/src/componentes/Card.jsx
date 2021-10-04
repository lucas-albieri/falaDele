import './Card.css'



const Card = (props) => {
    return (  
        <div className="card-content">
            <div className={`card-img ${props.style}`} >
                <img src={props.src} alt="" />
            </div>
            <div className="card-name">
             <h2> {props.title} </h2>
            </div>
        </div>
    );
}
 
export default Card;