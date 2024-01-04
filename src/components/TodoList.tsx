import { useAppSelector } from "../hook";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);
    
    return <>
        {todos.map((todo) => (
            <TodoItem 
                key={todo.id} 
                {...todo} 
            />
        ))}
    </>
}