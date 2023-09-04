import type { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "types/todoSliceTypes";
import { doneTask, removeTask } from "~/store/slices/taskSlice";

//Компонент-задача

type TaskItemProps = {
  data: { id: number; text: string; done: boolean };
};

const TaskItem: FunctionComponent<TaskItemProps> = ({ data }) => {
  const { isDarkTheme } = useSelector((state: RootState) => state.taskSlice);
  const dispatch = useDispatch();

  //Хендлер удаления задачи
  const handleTaskRemove = (id: number) => {
    dispatch(removeTask(id));
  };

  //Хендлер выполнения задачи
  const handleTaskDone = (id: number) => {
    dispatch(doneTask(id));
  };

  return (
    <div
      className={`flex flex-row items-center justify-between gap-x-[5px] py-[10px] ${
        isDarkTheme ? "text-white" : "text-gray-900"
      }`}
    >
      <p className="max-w-[500px] break-words text-sm font-semibold leading-6">
        {data.text}
      </p>
      <div className="flex flex-col gap-x-[5px]">
        <button onClick={() => handleTaskDone(data.id)}>
          {data.done ? "✅" : "🔳"}
        </button>
        <button onClick={() => handleTaskRemove(data.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskItem;
