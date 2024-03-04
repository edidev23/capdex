import "../App.scss";

const Button = (props) => {
  return <button onClick={() => props.clicked()}>{props.title}</button>;
};

export default Button;
