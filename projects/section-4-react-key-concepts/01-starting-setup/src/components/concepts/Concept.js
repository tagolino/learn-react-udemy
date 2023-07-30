import './Concept.css';

import Card from "../ui/Card";

const Concept = (props) => {
    return (<Card className="concept" >
        <img src={props.imageSrc} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </Card>)
};

export default Concept;
