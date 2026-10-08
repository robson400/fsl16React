import styleTaskItem from "./TaskItem.module.css"

const TaskItem = ({task})=>{
    return(
        <li className={styleTaskItem.itemList}>
            <div className={styleTaskItem.itemList}>
                <input 
                    type="checkbox" 
                    name="task"
                    className={styleTaskItem.iptCheck} 
                />
                <span>{task.text}</span>
            </div>
            <button className={styleTaskItem.btnItem}>Remover</button>
        </li>
    )
}

export default TaskItem