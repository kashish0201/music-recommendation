import { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import SongCard from '../components/SongCard';
import Wrapper from '../Wrapper';
import useAudioPlayer from '../hooks/useAudioPlayer';

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setSearchResults([]);
        setError(null);
        axiosInstance.get(`music/search/${searchTerm}`).then(res => {
            setSearchResults(res.data.songs);
        }).catch(e => {
            setError(e);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [searchTerm])

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const { handleSongSelect } = useAudioPlayer();

    const songSelect = (index) => {
        handleSongSelect(index, searchResults);
    }

    return (
        <>
            <div className="search">
                <input type="text" placeholder="Search for a song" value={searchTerm} onChange={handleChange} />
            </div>
            <div className="search-results">
                {searchTerm && isLoading && <p>Loading...</p>}
                {searchTerm && error && <p>Something went wrong</p>}
                {searchTerm && searchResults.map((song, index) => {
                    return (
                        <SongCard
                            key={index}
                            index = {index}
                            id={song.id}
                            name={song.name}
                            isLiked={song.isLiked}
                            songSelect={songSelect}
                        />
                    );
                })}
                {!searchTerm && <p>Search for a song</p>}
            </div>
        </>
    );
}
 
export default Wrapper(Search);