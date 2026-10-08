import styleTaskForm from "./TaskForm.module.css"

const TaskForm = ()=>{
    return(
        <form className={styleTaskForm.container}>
            <input 
                type="text" 
                placeholder="Digite uma tarefa..."
                className={styleTaskForm.iptTask}
                required
            />
            <button className={styleTaskForm.btnSubmit}>Adicionar</button>
        </form>
    )
}

export default TaskForm
