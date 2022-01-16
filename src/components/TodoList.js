import React from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, addTodo,removeTodo,updateTodo } from "../redux/action";

const TodoList = () => {
    const state = useSelector((state) => ({...state.todos }));
    let dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const update = (id,updateTask) => {
        dispatch(updateTodo({ id, updateTask }));
    };
    return (
        <div className="TodoList">
            <h1> Todo App With React Redux</h1>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className="todo-List">
                    {state.rodos && state.todos.map((todo) => {
                        return(
                            <CSSTransition key={todo.id} className="todo">
                              <Todo 
                              key = {todo.id} 
                              id = {todo.id}
                              task = {todo.task}
                              complete={todo.complete}
                              toggleTodo={() => dispatch(completeTodo(todo))}
                              removeTodo={() => dispatch(removeTodo(todo))}
                              updateTodo={update}
                              />
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </ul>
        </div>
    );
};
export default TodoList;