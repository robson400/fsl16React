import { useState } from "react"
import styleTaskForm from "./TaskForm.module.css"

const TaskForm = ({ tasks, setTasks })=>{

    const [task, setTask] = useState("")

    const sendTask = e => {
        e.preventDefault()

        const newTask = {
            id: Date.now(),
            text: task,
            status: false
        }

        setTasks([...tasks, newTask])
        setTask("")
    }

    return(
        <form className={styleTaskForm.container} onSubmit={sendTask}>
            <input 
                type="text" 
                placeholder="Digite uma tarefa..."
                className={styleTaskForm.iptTask}
                onChange={ e => setTask(e.target.value)}
                value={task}
                required
            />
            <button 
                className={styleTaskForm.btnSubmit}
                type="submit"
            >
                Adicionar
            </button>
        </form>
    )
}

export default TaskForm
