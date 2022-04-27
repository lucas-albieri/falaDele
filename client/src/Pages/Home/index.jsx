import { useState, useEffect } from "react";
import "./styles.css";
import HashLoader from "react-spinners/HashLoader";
import VideoHome from "../../components/VideoHome";
import Navbar from "../../components/NavBar";
import CardChampion from "../../components/CardChampion";
import { basicFetch } from "../../Services/AllChampions";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    basicFetch()
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          className="load"
          color={"#671ED6"}
          loading={loading}
          size={100}
        />
      ) : (
        <div className="paizao">
          <div className="home">
            <div className="sidebar">
              <span class="material-icons">dashboard</span>
              <span class="material-icons">extension</span>
              <span class="material-icons">local_mall</span>
              <span class="material-icons">not_started</span>
            </div>
            <Navbar />
          </div>
        
        <div className="champions">
          <h2>ESCOLHA SEU</h2>
          <h1>CAMPEÃO</h1>
          <div>
            <CardChampion /> 
          </div>
        </div>

          <div className="video-footer">
            <VideoHome />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
