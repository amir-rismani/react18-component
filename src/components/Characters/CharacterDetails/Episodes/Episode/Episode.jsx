import "./Episode.css"

const Episode = ({ episode, id }) => {
    return (
        <div className="episode-item">
            <div className="episode-item__title">
                <span className="id">{String(episode.id).padStart(2, '0')} - {episode.episode}:  </span>
                <strong className="neme">{episode.name}</strong>
            </div>
            <div className="episode-item__date">{episode.air_date}</div>
        </div>
    );
}













export default Episode;