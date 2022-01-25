import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
import { type } from "@testing-library/user-event/dist/type";

const initialState = {
    todos: [{ id: 1, task: "Wake Up", completed: false}],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO: 
        const newTodo =   {
            id: uuidv4(),
            task: action.payload,
            completed: false,
        };
        
        const addedTodos = [...state.todos, newTodo];
        return {
            ...state,
            todos: addedTodos,
        };
        case types.REMOVE_TODO:
            const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
            return {
                ...state,
                todos: filterTodo,
            };
            case types.UPDATE_TODO:
                const updateTodos = state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                    return {...todo, task: action.payload.updatedTask };
                }
                return todo;
            });
            return {
                ...state,
                todos: updateTodos,
            }
        case types.COMPLETE_TODO:
            const toggleTodos = state.todos.map((t) =>
            t.id === action.payload.id
            ? { ...action.payload, completed: !action.payload.completed }
            : t 
            );
            return {
                ...state,
                todos: toggleTodos,
            };
            default:
                return state;
    }
};

export default todosReducer; 