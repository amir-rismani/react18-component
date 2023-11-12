import Episode from './Episode/Episode';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'

import "./Episodes.css"

const Episodes = ({ episodes }) => {
    return (
        <div className="episodes">
            <div className='episodes__header'>
                <strong>List of Episodes:</strong>
                <ArrowDownCircleIcon className="sort" />
            </div>
            <div className='episodes__list'>
                {episodes.map((episode, id) => <Episode episode={episode} id={id + 1} />)}
            </div>
        </div>
    );
}

export default Episodes;