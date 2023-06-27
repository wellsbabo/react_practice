import {useParams} from "react-router-dom";
import {useEffect} from "react"; //URL에 있는 파라미터를 가져오기 위한 함수. React Router에서 URL 뒤에 있는 파라미터 변수를 넘겨준다

function Detail(){
    const {id} = useParams();  //URL의 파라미터를 가져온다. {파라미터 변수명}으로 받으면 들어오는 값 그대로를 가진다. {id:1234} 형태가 아니라 그냥 1234

    const getMovie = async () => {
        const json = await(
            (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        ).json();
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    },[])
    return <h1>Detail</h1>
}

export default Detail;