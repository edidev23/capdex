import "../App.scss";
import logo from "../assets/img/logo.png";

const LogoComponent = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} />
        <span>Capdex</span>
      </div>
    </>
  );
};

export default LogoComponent;
