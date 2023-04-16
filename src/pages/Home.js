import Genre from '../components/Genre';
import withWrapper from '../Wrapper';

const Home = () => {
    return (
        <>
            <h3 className="genreHeading">Genres</h3>
            <Genre />
        </>
    )
}

export default withWrapper(Home);