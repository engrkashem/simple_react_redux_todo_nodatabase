import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/actions";

const numberOfTodoesTextFormatter = (no_of_todoes) => {
  switch (no_of_todoes) {
    case 0:
      return "No Pending Task";

    case 1:
      return `${no_of_todoes} Task Left`;

    default:
      return `${no_of_todoes} Tasks Left`;
  }
};

const Footer = () => {
  const todoes = useSelector((state) => state.todoes);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const taskLeft = todoes.filter((todo) => !todo.completed);

  const { status, colors } = filters;

  const statusChangedHandler = (status) => {
    dispatch(statusChanged(status));
  };

  const colorChangeHandler = (color) => {
    if (colors.includes(color)) dispatch(colorChanged(color, "removed"));
    else dispatch(colorChanged(color, "added"));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodoesTextFormatter(taskLeft.length)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "all" && "font-bold"}`}
          onClick={() => statusChangedHandler("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "incomplete" && "font-bold"}`}
          onClick={() => statusChangedHandler("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "complete" && "font-bold"}`}
          onClick={() => statusChangedHandler("complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => colorChangeHandler("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => colorChangeHandler("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => colorChangeHandler("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
