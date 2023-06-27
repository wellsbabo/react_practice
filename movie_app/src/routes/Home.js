import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    //.then 대신에 async-await 사용
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        // 위에 내용과 같은 내용
        // const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
        const json = await response.json();
        //console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    } , []);

    console.log(movies);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}    //key는 React.js에서만, map안에서 컴포넌트들을 render할 때 사용하는 것
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}
            </div>}
        </div>
    );
}

export default Home;