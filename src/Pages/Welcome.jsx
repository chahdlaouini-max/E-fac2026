import "./Welcome.css";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-fullscreen">
       <div className="hero" >
      <div className="content">
        <h1>
          <div className="welcome">Welcome</div>
          <div className="to">To</div>
          <div className="tunisair">Tunisair</div>
          <div className="express">Express</div>
        </h1>

        <div className="buttons">
          <button className="btn inscription" onClick={() => navigate("/Inscription")}>Inscription</button>
          <button className="btn login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
    </div>
   
  );
}
