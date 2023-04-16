import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <>
            <Link to={props.Link} className='genreCard'> 
                <img className='cardImage' src={props.image} alt=""/>
                <span className='cardName'>{props.genre}</span>
            </Link>
        </>
    )
}

export default Card;