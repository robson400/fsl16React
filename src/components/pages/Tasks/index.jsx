import PageDefault from "../../templates/PageDefault.jsx"
import TaskList from "../../molecules/TaskList.jsx"
import TaskForm from "../../organisms/TaskForm"

import styleTasks from "./Tasks.module.css"

const Tasks = ()=>{

    const lista = [
        {id:1, text:"lavar Roupa"},
        {id:2, text:"Estudar"}
    ]


    return(
        <PageDefault>
            <section className={styleTasks.container}>
                <h1>📋 Gerenciamento de Tarefas</h1>
                <TaskForm />
                <TaskList 
                    tasks={lista} 
                    style={styleTasks.listTasks}
                    className
                />
            </section>
        </PageDefault>
    )
}

export default Tasks
