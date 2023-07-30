import "./Concepts.css";

import Concept from './Concept'

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <Concept
        imageSrc={props.concepts[0].image}
        title={props.concepts[0].title}
        description={props.concepts[0].description}
      />
      <Concept
        imageSrc={props.concepts[1].image}
        title={props.concepts[1].title}
        description={props.concepts[1].description}
      />
      <Concept
        imageSrc={props.concepts[2].image}
        title={props.concepts[2].title}
        description={props.concepts[2].description}
      />
    </ul>
  );
};

export default Concepts;
