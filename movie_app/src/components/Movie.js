import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){   //props를 넣어준다
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                {/*새로고침 없이 다른 페이지로 넘어가기 위해 Link to 사용*/}
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map(g=> <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

// 에러 발생을 방지하기 위해 타입을 확인하기 위해 ProTypes 사용
Movie.prototype = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;