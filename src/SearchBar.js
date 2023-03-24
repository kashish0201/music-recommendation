import './styles/SearchBar.css';

function SearchBar() {
    return (
        <>
            <input type='text' name='search-song' placeholder= 'search your song' className='searchBar'/>
            {/* <div className='searchBar'></div> */}
        </>
    )
}

export default SearchBar;