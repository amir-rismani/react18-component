import "./Episode.css"

const Episode = ({ episode, id }) => {
    return (
        <div className="episode-item">
            <div className="episode-item__title">
                <span className="id">{String(episode.id).padStart(2, '0')}: </span>
                <strong className="neme">{episode.title}</strong>
            </div>
            <div className="episode-item__date">{new Date(episode.created).toLocaleDateString('en-US', {
                month: "short",
                day: "numeric",
                year: "numeric"
            })}</div>
        </div>
    );
}













export default Episode;