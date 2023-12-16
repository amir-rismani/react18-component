import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import Episode from './Episode/Episode';

import "./Episodes.css"
import { useState } from 'react';

const Episodes = ({ episodes }) => {
    const [sort, setSort] = useState(true);

    let sortedEpisodes;
    if (sort) {
        sortedEpisodes = [...episodes].sort((a, b) => new Date(a.air_date) - new Date(b.air_date))
    }
    else {
        sortedEpisodes = [...episodes].sort((a, b) => new Date(b.air_date) - new Date(a.air_date))
    }
    return (
        <div className="episodes">
            <div className='episodes__header'>
                <strong>List of Episodes:</strong>
                <ArrowUpCircleIcon className="sort" onClick={() => setSort(is => !is)} style={{ rotate: sort ? '0deg' : '180deg', transition: 'all .3s ease-in-out' }} />
            </div>
            <div className='episodes__list'>
                {sortedEpisodes.map((episode) => <Episode episode={episode} key={episode.id} />)}
            </div>
        </div>
    );
}

export default Episodes;