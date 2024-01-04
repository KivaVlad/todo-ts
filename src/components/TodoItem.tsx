import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../store/slice/todoSlice";
import { ITodo } from "../types/data";

interface ITodoItem extends ITodo{}


export const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, completed } = props;

    const dispatch = useAppDispatch();

    return <>
        <div className="todo-item__wrapper">
            <input className="checkbox" type='checkbox' checked={completed} onChange={() => dispatch(toggleComplete(id))} />
            <div className="todo__title">{title}</div>
            <button className="remove__button" onClick={() => dispatch(removeTodo(id))}>x</button>
        </div>
    </>
}