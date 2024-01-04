import { useState } from "react";
import { useAppDispatch } from "../hook";
import { TodoList } from "./TodoList";
import { addTodo } from "../store/slice/todoSlice";

export const App: React.FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    function handleAction() {
        if (value.trim()) {
            dispatch(addTodo(value));
            setValue('');
        }
    }

    return (
        <div className="container">
            <div className="content">
                <div className="input__container">
                    <input 
                        className="input"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Write a task"
                    />
                    <button onClick={handleAction} className="button">Add</button>
                </div>

                <TodoList />
            </div>
        </div>
    )
}