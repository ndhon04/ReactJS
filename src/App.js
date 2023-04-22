import logo from './logo.svg';
import './App.css';
import StudentList from "./StudentList";
import { useState, useEffect } from "react";
function App() {
  const [x, setX] = useState(0);
  const [text, setText] = useState("mèo");
  const [name, setName] = useState("");
  const [student, setStudent] = useState({ name: "Quỳnh Gia", old: 10 });
  const [check, setCheck] = useState(true)
  // const [list, setList] = useState([1, 2, 3, 4]);
  const vd = [{ name: "Cún", old: 2 }, { name: "khỉ", old: 4 }];
  const [list, setList] = useState(() => {
    let listLocal;
    if(localStorage.getItem("list")){
       listLocal = JSON.parse(localStorage.getItem("list"))
    }
    else{
       listLocal=vd  
    }
    return listLocal
  });

  const handle_Increase = () => {
    setX((pre) => pre + 1);
    setX((pre) => pre + 1);
  }
  const handle_Change_Text = (e) => {
    e.preventDefault();
    setText(name);
    setName("");
  }
  const handle_Change_Name = (event) => {
    setName(event.target.value);
    setStudent((pre) => ({ ...pre, name: name }))
  }
  const handle_Toggle_Student = () => {
    setCheck((pre) => !pre)
  };
  const handle_Add = () => {
    setList((pre) => {
      const newList = [...pre, { name: name, old: 3 }];
      localStorage.setItem("list", JSON.stringify(newList))
      return newList
    });
  };
  const handle_Remove=()=>{
   JSON.parse(localStorage.getItem("list"))
  }
  return (
    <div>
      <h1>tới cục cứt thịt chứ</h1>
      <h2>React js</h2>
      <h1>{x}</h1>
      <h1>{text}</h1>
      <h1>Name: {name}</h1>
      <h1>Họ và tên: {student.name}<br></br>tuổi: {student.old}</h1>
      <h2>{JSON.stringify(student)}</h2>
      <button onClick={handle_Increase}>Increase</button>
      <button onClick={handle_Change_Text}>Change Text</button>
      <button onClick={handle_Toggle_Student}>Toggle</button>
      <StudentList />
      {check ? <StudentList /> : ""}
      {/* {check && <StudentList/>} */}
      <ul>
        {/* {list.map((st, key) => {
          return <li>{st}</li>
        })}  */}
        {list.map((st, key) => {
          // return <li>Họ và tên: {st.name}<br></br>Tuổi: {st.old}</li>
          return <li>{`họ và tên:${st.name},tuổi:${st.old}`}</li>
        })}
      </ul>
      <form onSubmit={handle_Change_Text}>
        <input type="text" placeholder="Name" value={name} onChange={handle_Change_Name} />
      </form>
      <button onClick={handle_Add}>ADD student</button>
      <button onClick={handle_Remove}>Remove Student</button>
      div
     </div>
  );
}

export default App;
