
import { useState } from "react";

import Button from 'react-bootstrap/Button';



 function Todo() {

    const [addtask,setAddtask] = useState("");
    const [list,setList] =useState([]);
        function addTodo(){
            setList((list)=>{
                const updatedlist = [...list,addtask];
                setAddtask('');
                return updatedlist;
            })
        }

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add your Task" value={addtask} onChange={(e)=>setAddtask(e.target.value)}/>
      <Button name="submit" onClick={addTodo}>Add</Button>
     

      <table>
        <tr>
          {list != [] && list.map((data,i)=>{
            return (
                <>
                <p key={i}>
                    <div className="listData">{data}</div>
                </p>
                </>
            )
          })}
        </tr>
      </table>
    </div>
  )
}

export default Todo;