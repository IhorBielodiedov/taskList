import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TaskSliceState, TaskItem } from "types/todoSliceTypes";

//Слайс стора для хранения данных по задачам

const initialState: TaskSliceState = {
  tasks: [],
  isDarkTheme: false,
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    //Экшен добавления задачи
    addTask: (state, action: PayloadAction<string>) => {
      const task: TaskItem = {
        id: Math.random() * 100,
        text: action.payload,
        done: false,
      };
      state.tasks.push(task);
    },
    //Экшен выполнения задачи
    doneTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.done = true;
      }
    },
    //Экшен удаления задачи
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    //Экшен смены темы
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkTheme = action.payload;
    },
  },
});

const { actions, reducer } = taskSlice;

export default reducer;
export const { addTask, doneTask, removeTask, changeTheme } = actions;
