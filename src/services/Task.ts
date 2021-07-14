import { ITask, Task } from "@models/Task";

export const createTask = async (description: string): Promise<Task> => {
  return new Task(description);
};

export const listTasks = async (): Promise<Task[]> => {};
export const search = async (): Promise<Task[]> => {};
export const showTask = async (): Promise<Task =>> {};
export const deleteTask = async (): Promise<void =>> {};
// export const createTask = () => {};
