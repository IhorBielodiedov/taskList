import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, TaskSliceState } from "types/todoSliceTypes";
import TaskItem from "../taskItem";
import { addTask, changeTheme } from "~/store/slices/taskSlice";
import { generateComponents } from "~/utils/helpers";

const TaskList: FunctionComponent = () => {
  const { tasks, isDarkTheme } = useSelector(
    (state: RootState) => state.taskSlice as TaskSliceState
  );
  const [input, setInput] = useState("");
  const [showDoneTasks, setShowDoneTasks] = useState("all");

  const dispatch = useDispatch();

  //Хендлер добавления задачи
  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(input));
  };

  //Хендлер изменения значения внутри инпута
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  //Хендлер изменения фильтра
  const handleTasksFilterChange = (filter: string) => {
    setShowDoneTasks(filter);
  };

  //Хендлер изменения темы приложения
  const handleThemeChange = () => {
    dispatch(changeTheme(!isDarkTheme));
  };

  //Отфильтрованный массив данных(задач)
  const filteredTasks =
    showDoneTasks === "all"
      ? tasks
      : showDoneTasks === "done"
      ? tasks.filter((task) => task.done)
      : tasks.filter((task) => !task.done);

  return (
    <div className="w-[80%] max-w-[600px]">
      <form onSubmit={handleAddTask} className="flex gap-x-[10px]">
        <input
          type="text"
          placeholder="Введите вашу задачу"
          className={`h-[40px] w-[100%] rounded-[10px] px-[10px] ${
            isDarkTheme
              ? "bg-gray-900 text-white"
              : "bg-[#f8f8f8] text-gray-900"
          }`}
          onInput={handleInputChange}
        />
        <button
          type="submit"
          className="h-[40px] h-[40px] w-[40px] rounded-[10px] bg-[#00ff00] px-[10px] text-[25px] font-bold leading-none text-white"
        >
          +
        </button>
      </form>
      <div className="my-[20px] flex items-center gap-x-[5px]">
        <p>⚙️</p>
        <button
          className={`filter-btn ${
            showDoneTasks === "all" ? "bg-[#00ff00]" : ""
          } ${isDarkTheme ? "text-white" : ""}`}
          onClick={() => handleTasksFilterChange("all")}
        >
          Все
        </button>
        <button
          className={`filter-btn ${
            showDoneTasks === "done" ? "bg-[#00ff00]" : ""
          } ${isDarkTheme ? "text-white" : ""}`}
          onClick={() => handleTasksFilterChange("done")}
        >
          Выполненные
        </button>
        <button
          className={`filter-btn ${
            showDoneTasks === "notDone" ? "bg-[#00ff00]" : ""
          } ${isDarkTheme ? "text-white" : ""}`}
          onClick={() => handleTasksFilterChange("notDone")}
        >
          Не выполненные
        </button>
        <button
          onClick={handleThemeChange}
          className={`${isDarkTheme ? "text-white" : ""}`}
        >
          {isDarkTheme ? "Темная" : "Светлая"}
        </button>
      </div>
      <div
        className={`divide-y divide-gray-100 ${
          isDarkTheme ? "text-white" : "text-gray-900"
        }`}
      >
        {filteredTasks.length > 0
          ? generateComponents(filteredTasks, TaskItem)
          : "Здесь пока ничего нет"}
      </div>
    </div>
  );
};

export default TaskList;
