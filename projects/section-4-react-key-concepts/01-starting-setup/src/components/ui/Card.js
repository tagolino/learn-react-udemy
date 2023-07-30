import "./Card.css";

const Card = (props) => {
  const classes = "concept " + props.className;
  return <li className={classes}>{props.children}</li>;
};

export default Card;
