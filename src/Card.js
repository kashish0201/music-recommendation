import './styles/Card.css';



function Card(props) {
    return (
        <>
         <div className='genreCard'>
            <img src={props.image} alt=""/>
            <span>{props.genre}</span>
         </div>
        
        </>
    )
}

export default Card;