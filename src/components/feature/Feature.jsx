import './Feature.css';


export default function Feature(props) {
    return (
       <div className='feature'>
        <i className={props.class}></i>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
       </div>
    )
}