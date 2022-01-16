import React, {useState} from "react";
import "./TodoInput.css";

const TodoInput = ({ createTodo }) => {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.prevetDefault();
        createTodo(task);
        setTask("");
    };
    return (
        <from className = "TodoInput" onSubmit={handleSubmit}>
            <input type="text" placeholder="enter task" id="task" name="task" value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button>ADD Todo</button>
        </from>
    );
};
export default TodoInput;