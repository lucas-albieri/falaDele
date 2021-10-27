import './Ajuda.css'
import videoAjuda from './imgs/video-ajuda.mp4'
import lolLogo from './imgs/lol-logo.png'
import riotLogo from './imgs/logo-riot.png'
import detalhe from './imgs/divider.png'


const Ajuda = () => {
    return ( 
        <div className="ajuda">
            <div className="header-ajuda">
                <img src={lolLogo} alt="" />
                
                <h2>REGIÃO</h2>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        BRASIL (PORTUGUÊS)
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/">Action</a></li>
                        <li><a class="dropdown-item" href="/">Another action</a></li>
                        <li><a class="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <h1>JOGAR LEAGUE OF LEGENDS</h1>
            <img src={detalhe} alt="" />

            <div className="btn-baixar"> <button>BAIXAR PARA WINDOWS</button> </div> 

            

            <div className="background-component">
                <div className="background-ajuda">
                    <video playsInline autoPlay="true" loop src={videoAjuda} type="video/mp4">
 
                    </video>  
                </div>
            </div>
        </div>
     );
}
 
export default Ajuda;
