import { useState } from "react"

import PageDefault from "../../templates/PageDefault.jsx"
import TaskList from "../../molecules/TaskList.jsx"
import TaskForm from "../../organisms/TaskForm"

import styleTasks from "./Tasks.module.css"

const Tasks = ()=>{

    const [tasks, setTasks] = useState([])

    return(
        <PageDefault>
            <section className={styleTasks.container}>
                <h1>📋 Gerenciamento de Tarefas</h1>
                <TaskForm 
                    setTasks={setTasks} 
                    tasks={tasks}
                />
                <TaskList 
                    tasks={tasks} 
                    style={styleTasks.listTasks}
                />
            </section>
        </PageDefault>
    )
}

export default Tasks
