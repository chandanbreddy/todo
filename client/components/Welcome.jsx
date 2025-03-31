import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/home");
      return; 
    }
  }, []);

  return (
    <div className="welcome">
      <p className="wel-title">WELCOME TO</p>
      <p className="wel-title">ToDo IST</p>
      <h3 >Click on continue to proceed </h3>
      <button
        className="wel-button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Continue
      </button>
    </div>
  );
}
