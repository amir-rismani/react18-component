import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'

import "./Episodes.css"

const Episodes = ({ children }) => {
    return (
        <div className="episodes">
            <div className='episodes__header'>
                <strong>List of Episodes:</strong>
                <ArrowDownCircleIcon className="sort" />
            </div>
            <div className='episodes__list'>
                {children}
            </div>
        </div>
    );
}

export default Episodes;