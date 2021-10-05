import './VideoHome.css'

import videoLol from "./Movie/fiddle.mp4"

const VideoHome = () => {
    return ( 
        <div className="video-home">
            <video autoPlay muted loop src={videoLol} />
            <div className="content">
                <button>JOGUE DE GRAÇA</button>
            </div>
        </div>
     );
}
 
export default VideoHome;