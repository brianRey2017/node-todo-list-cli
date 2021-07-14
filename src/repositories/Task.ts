import { GlobalStore, initDB } from "@lib/database";
import { ITask, Task } from "@models/Task";

class TaskRepository {
  static db = await initDB();

  static createTaks = async (description: string): Promise<Task | void> => {
    const tasks = new Task(description);
    console.log(this.db);
  };

  public static listTasks = async (): Promise<Task[]> => {};
  public static search = async (): Promise<Task[]> => {};
  public static show = async (): Promise<Task> => {};
  public static deleteTask = async (): Promise<void> => {};
}
// export const createTask = () => {};
