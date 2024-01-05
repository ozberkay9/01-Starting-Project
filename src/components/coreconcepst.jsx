import './coreconcepts.css';

export default function CoreConcept({image, title, description, mode}){

  const  Berkay = title;

    return (
      <li>
        <img src={image} alt={Berkay} />
        <h3 className={ mode && `${mode}-title`}>{Berkay}</h3>
        <p>{description} </p>
      </li>
    );
  }


