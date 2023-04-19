// raw Tried code Go for TOdoList This Just tried If Logic Works

import React,{useState,useEffect} from "react";

function Mytodo(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState('');

    useEffect(()=>{
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if(savedTasks){
            setTasks(savedTasks)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks]);

    const handleNewTask=(e)=>{
        setNewTask(e.target.value)
    }
    const handleAddTask=()=>{
        if(newTask.trim()!==''){
            setTasks([...tasks,{id:Date.now(),task:newTask,completed:false}]);
            setNewTask('');
        }
    }

    const handleCompleteTask=(id)=>{
        const updatedTasks=tasks.map((task)=>{
            if(task.id===id){
                return{...task,completed:!task.completed};
            }else{return task};
        });
        setTasks(updatedTasks);
    }


return (
    <div>
        <h1>To-DO List</h1>
        <input type="text" value={newTask} onChange={handleNewTask}/>
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} onClick={()=>handleCompleteTask(task.id )} style={{textDecoration:task.completed?'line-through':'none'}}>{task.task}</li>

            ))}
        </ul>
    </div>
)}
export default Mytodo;