import TaskItem from "./../atoms/TaskItem.jsx"

const TaskList = ({tasks, style})=>{
    return(
        <ul className={style}>
            {
                tasks.map(task => <TaskItem key={task.id} task={task} />)
            }
        </ul>
    )
}

export default TaskList