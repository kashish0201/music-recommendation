import "./auth/auth.css"
import "./styles/classify.css"


const Classify = () => {
    return (
        <form className="classify">
            <div className="upload-btn-wrapper">
                <button className="upload-btn">upload to recognize</button>
                <input type="file" accept="audio/x-wav" />
            </div>
        </form>
    );
}
 
export default Classify;