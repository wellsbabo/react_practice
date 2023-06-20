import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function Hello(){
    
    //밑에 cleanup 함수를 쪼개보면 아래와 같아진다
    // function destroyFn(){
    //     console.log("destroyed :(");
    // }
    // function createFn(){
    //     console.log("created :)");
    //     return destroyFn();
    // }
    // useEffect(createFn,[]);
    
    
    useEffect(() => {
        console.log("created :)");
        return () => console.log("destroyed :(")    //cleanup 함수
    },[])
    return (
        <h1>Hello</h1>
    )
}

function App() {
    const[showing, setShowing] = useState(false);
    const [counter, setValue] = useState(0);
    const[keyword, setKeyword] = useState("");

    const onClick = () => {
        setValue((prev) => prev + 1);
    };

    const onClick2 = () => {
        setShowing((prev) => !prev);
    }
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
            <div>
                {showing? <Hello/> : null}
                <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
            </div>
        </div>
    );
}

export default App;
