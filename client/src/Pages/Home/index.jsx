import { useState, useEffect } from "react";
import "./styles.css";
import HashLoader from "react-spinners/HashLoader";
import VideoHome from "../../components/VideoHome";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
          <div className="home">asdsadsad</div>

          <div className="video-footer">
            <VideoHome />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
