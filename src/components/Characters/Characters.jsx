
import "./Characters.css"
const Characters = ({ children }) => {
    return (
        <div className="characters">
            <div className="characters__list">
                {children}
            </div>
        </div>
    );
}

export default Characters;