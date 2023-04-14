import WelcomeImage from '../images/musical-note.png';

function RightNav() {
    return (
        <>
            <div className="rightNav"> 
                <img className='welcome-image' src={WelcomeImage} alt=''/>    
                <h1 className='welcome'>welcome back!</h1>
                <h2 className='greeting'>what would you like to hear today?</h2>       
            </div>
        </>
    )
}

export default RightNav;