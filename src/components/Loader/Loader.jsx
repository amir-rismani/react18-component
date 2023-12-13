import { ArrowPathIcon } from "@heroicons/react/24/outline";
import "./Loader.css"
const Loader = () => {
    return (
        <div className="loader"><span>Loading data...</span><span><ArrowPathIcon className="loader__icon" /></span></div>
    );
}

export default Loader;