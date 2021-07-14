import { initDB } from "@lib/database";
import { ITaskListFilter, Task } from "@models/Task";

export class TaskRepository {
  static createTask = async (description: string): Promise<Task> => {
    const db = await initDB();
    console.log(db);
    return new Task(description);
  };

  public static listTasks = async (): Promise<Task[]> => {
    const { tasks } = await initDB();
    return tasks;
  };
  public static searchTasks = async (
    filter: ITaskListFilter = {}
  ): Promise<Task[]> => {
    const { tasks } = await initDB();
    return tasks;
  };
  public static showTask = async (id: string): Promise<Task> => {
    const { tasks } = await initDB();
    return tasks[0];
  };
  public static deleteTask = async (id: string): Promise<void> => {
    const { tasks } = await initDB();
  };
  public static completeTask = async (id: string): Promise<void> => {
    const { tasks } = await initDB();
  };
}
// export const createTask = () => {};
