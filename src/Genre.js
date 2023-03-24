import Card from './Card';
import './styles/Genre.css';

function Genre() {
    return (
        <div className="genre">
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Hip-Hop'
            />
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Rap'
            />
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Bollywood'
            />
            <Card
                image='https://youthincmag.com/wp-content/uploads/2020/07/Pin-Img.jpg'
                genre='Classics'
            />
            
        </div>
    )
    
}

export default Genre;