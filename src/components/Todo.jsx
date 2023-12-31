import { useDispatch } from "react-redux";
import cancel from "../assets/images/cancel.png";
// import { colorSelected, deleted, toggled } from "../redux/todoes/actions";
import updateTodoStatus from "../redux/todoes/thunk/updateTodoStatus";
import updateTodoColor from "../redux/todoes/thunk/updateTodoColor";
import deleteTodo from "../redux/todoes/thunk/deleteTodo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const { id, text, completed, color } = todo;
  const line_through = completed ? "line-through" : "";

  const completedStatusChangeHandler = (todoId) => {
    dispatch(updateTodoStatus(todoId, completed));
  };

  const colorStatusChangeHandler = (todoId, color) => {
    dispatch(updateTodoColor(todoId, color));
  };

  const deleteTodoHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => completedStatusChangeHandler(id)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className={`fill-current w-3 h-3 text-green-500 pointer-events-none`}
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${line_through}`}>{text}</div>

      <div
        onClick={() => colorStatusChangeHandler(id, "green")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color == "green" && "bg-green-500"
        }`}
      ></div>

      <div
        onClick={() => colorStatusChangeHandler(id, "yellow")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color == "yellow" && "bg-yellow-500"
        }`}
      ></div>

      <div
        onClick={() => colorStatusChangeHandler(id, "red")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color == "red" && "bg-red-500"
        }`}
      ></div>

      <img
        onClick={() => deleteTodoHandler(id)}
        src={cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
};

export default Todo;
