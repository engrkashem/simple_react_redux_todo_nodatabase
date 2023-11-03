import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todoes = useSelector((state) => state.todoes);
  // console.log(todoes);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoes?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
