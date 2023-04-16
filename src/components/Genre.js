import Card from './Card';
import axiosInstance from '../axios';
import { useEffect, useState } from 'react';

function Genre() {

    const [allGenres, setAllGenres] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axiosInstance.get('music/genres').then(res => {
            setAllGenres(res.data.message)
        }).catch(e => {
            setError(error)
        })
    }, [])
    
    if (allGenres) {
        return (
            <div className="genre">
                {
                    allGenres.map((genre, index) => {
                        return (
                            <div className="cardContainer">
                                <Card
                                    key={index}
                                    image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                                    genre={genre}
                                    Link={`/genrepage/${genre.toLowerCase()}`}
                                />
                            </div>
                        )
                    })
                }        
            </div>
        )
    } else {
        return <p>OOPS!</p>
    }
    
}

export default Genre;