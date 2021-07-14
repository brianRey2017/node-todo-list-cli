import { ITaskListFilter, Task } from "@models/Task";
import { TaskRepository } from "repositories/Task";
export class TaskService {
  public static createTaks = async (description: string): Promise<Task> => {
    return TaskRepository.createTask(description);
  };

  public static listTasks = async (): Promise<Task[]> => {
    return TaskRepository.listTasks();
  };
  public static search = async (filter: ITaskListFilter): Promise<Task[]> => {
    return TaskRepository.searchTasks();
  };
  public static show = async (id: string): Promise<Task> => {
    return TaskRepository.showTask(id);
  };
  public static deleteTask = async (id: string): Promise<void> => {
    return TaskRepository.deleteTask(id);
  };
  public static completeTask = async (id: string): Promise<void> => {
    return TaskRepository.completeTask(id);
  };
}
// export const createTask = () => {};
