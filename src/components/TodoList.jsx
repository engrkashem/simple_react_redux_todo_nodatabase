import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import fetchTodos from "../redux/todoes/thunk/fetchTodos";
// import { useEffect, useState } from "react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  /**
  
  // const [renderableTodoes, setRenderableTodoes] = useState([]);

  // useEffect(() => {
  //   if (filters.status === "complete") {
  //     setRenderableTodoes(todoes.filter((todo) => todo.completed));
  //   } else if (filters.status === "incomplete") {
  //     setRenderableTodoes(todoes.filter((todo) => !todo.completed));
  //   } else setRenderableTodoes(todoes);
  // }, [filters, todoes]);

   */

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "complete":
        return todo.completed;

      case "incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
