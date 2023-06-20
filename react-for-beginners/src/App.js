import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const[keyword, setKeyword] = useState("");
    const onClick = () => {
        setValue((prev) => prev + 1);
    };
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() =>{
        console.log("i run all the time");
    },[counter])

    // const iRunOnlyOnce = () => {
    //     console.log("I run only once");
    // };
    useEffect(() => {
        console.log("CALL THE API...")
    },[]);  //렌더링될때 한번만 실행(지켜볼 값이 없기 때문에)

    useEffect(() => {
        if(keyword !== "" && keyword.length > 5){
            console.log("SEARCH FOR" , keyword);
        }
    }, [keyword])   //deps(dependency)에 있는 값을 지켜보다가 그게 변화할 때만 실행

    useEffect(()=>{
        console.log("I run when keyword & counter change")
    },[keyword,counter])


    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
