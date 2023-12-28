import noteImage from "../assets/images/notes.png";
import doubleTik from "../assets/images/double-tick.png";
import plusImg from "../assets/images/plus.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { allCompleted, clearCompleted } from "../redux/todoes/actions";
import addTodo from "../redux/todoes/thunk/addTodo";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const completeAllTaskHandler = () => {
    dispatch(allCompleted());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={addTodoHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={inputHandler}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={completeAllTaskHandler}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTik} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearCompletedHandler} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
