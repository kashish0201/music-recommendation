import './styles/RightNav.css';
import Dropdown from "./Dropdown";

function RightNav() {
    return (
        <>
            <div className="rightNav">    
                <Dropdown placeHolder="Select..." />
            </div>
        </>
    )
}

export default RightNav;