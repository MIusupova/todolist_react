const Tasks = ({value, data}) => {
    return (
            <li className="todo__item">
                <span className="todo__task">{value}
                <div className="todo__data">{data}</div>
                </span>

                <span className="todo__action todo__action_complete"></span>
                <span className="todo__action todo__action_delete"></span>
            </li>
    )
}
export default Tasks