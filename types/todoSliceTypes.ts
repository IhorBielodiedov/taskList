export interface TaskItem {
  id: number;
  text: string;
  done: boolean;
}

export interface TaskSliceState {
  tasks: TaskItem[];
  isDarkTheme: boolean;
}

export type TaskSliceAction<T = any> = {
  type: string;
  payload: T;
};

export type TaskSliceReducer = (
  state: TaskSliceState,
  action: TaskSliceAction
) => TaskSliceState;

export type TaskSliceActions = {
  addTask: TaskSliceAction<string>;
  removeTask: TaskSliceAction<number>;
};

export type TaskSlice = {
  reducer: TaskSliceReducer;
  actions: TaskSliceActions;
};
export type RootState = {
  taskSlice: TaskSliceState;
};
