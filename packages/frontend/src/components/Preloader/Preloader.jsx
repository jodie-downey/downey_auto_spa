import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Fetching live weather conditions...</p>
    </div>
  );
}

export default Preloader;
