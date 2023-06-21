import {useState, useEffect} from "react"

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {

        //a 태그를 눌렀을 때도 href 링크로 이동하지 않게할 경우
        //form 안에 submit 역할을 하는 버튼을 눌렀어도 새로고침 되지 않게하고싶을 경우 (submit은 작동)
        event.preventDefault();
        
        if(toDo === ""){
          return;
        }
        // setToDos((currentArray) =>{
        //   [toDo, ...currentArray]
        // })
        setToDos((currentArray) => [toDo, ...currentArray]);    //...은 전체 배열의 요소를 요소 낱개로 가져올때 사용
        setToDo("");
  };
  useEffect(() =>{
        console.log(toDos);
      },[toDos])


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {/*map은 각 배열의 아이템을 하나씩 갖고와서 함수를 적용시켜서 return 시킴*/}
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

    </div>
  );
}

export default App;
